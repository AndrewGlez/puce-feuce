import React, { useState } from "react";
import type { Eventos } from "../../types/Eventos";
import { useEventos } from "../../hooks/useEventos";
import { axiosInstance } from "../../services/fetcher";
import AdminLayout from "../layout/AdminPanel/AdminLayout";
import AdminEventsSection from "../layout/AdminPanel/AdminEventsSection";
import AdminEventFormModal from "../layout/AdminPanel/AdminEventFormModal";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("eventos");
  const { data: eventos = [], mutate } = useEventos();
  const [showForm, setShowForm] = useState(false);
  const [editingEvento, setEditingEvento] = useState<Eventos | null>(null);
  const [formData, setFormData] = useState<Partial<Eventos>>({
    titulo: "",
    descripcion: "",
    fecha_inicio: new Date(),
    tipo_evento: "conferencia",
    enlace: "",
    etiquetaEnlace: "Más Información",
    ubicacion: "",
    estado: "Inscripciones Abiertas",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // using axiosInstance for create/update

      // perform create or update via axios
      const result = editingEvento
        ? await axiosInstance.put(`/eventos/${editingEvento._id}`, formData)
        : await axiosInstance.post("/eventos", formData);
      if (result.status === 200 || result.status === 201) {
        setShowForm(false);
        setEditingEvento(null);
        setFormData({
          titulo: "",
          descripcion: "",
          fecha_inicio: new Date(),
          tipo_evento: "conferencia",
          enlace: "",
          etiquetaEnlace: "Más Información",
          ubicacion: "",
          estado: "Inscripciones Abiertas",
        });
        mutate();
      }
    } catch (error) {
      console.error("Error saving evento:", error);
    }
  };

  const handleEdit = (evento: Eventos) => {
    setEditingEvento(evento);
    setFormData({
      titulo: evento.titulo,
      descripcion: evento.descripcion,
      fecha_inicio: new Date(evento.fecha_inicio),
      fecha_fin: evento.fecha_fin ? new Date(evento.fecha_fin) : undefined,
      tipo_evento: evento.tipo_evento,
      enlace: evento.enlace,
      etiquetaEnlace: evento.etiquetaEnlace,
      imagen: evento.imagen,
      ubicacion: evento.ubicacion,
      estado: evento.estado,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      try {
        const res = await axiosInstance.delete(`/eventos/${id}`);
        if (res.status === 200) {
          mutate();
        }
      } catch (error) {
        console.error("Error deleting evento:", error);
      }
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("es-ES");
  };

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-8 font-geologica">
        <h1 className="text-3xl font-bold text-gray-800">
          {activeTab === "eventos" && "Gestión de Eventos"}
          {activeTab === "documentos" && "Gestión de Documentos"}
          {activeTab === "miembros" && "Gestión de Miembros"}
          {activeTab === "codigos" && "Gestión de Códigos QR"}
        </h1>
      </header>

      {/* Content */}
      <main className="flex-1 p-8">
        {activeTab === "eventos" ? (
          <AdminEventsSection
            eventos={eventos}
            onNew={() => {
              setEditingEvento(null);
              setFormData({
                titulo: "",
                descripcion: "",
                fecha_inicio: new Date(),
                tipo_evento: "conferencia",
                enlace: "",
                etiquetaEnlace: "Más Información",
                ubicacion: "",
                estado: "Inscripciones Abiertas",
              });
              setShowForm(true);
            }}
            onEdit={handleEdit}
            onDelete={handleDelete}
            formatDate={formatDate}
          />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {activeTab === "documentos" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Gestión de Documentos
                </h2>
                <p className="text-gray-600 text-lg">
                  Panel de documentos en desarrollo...
                </p>
              </div>
            )}

            {activeTab === "miembros" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Gestión de Miembros
                </h2>
                <p className="text-gray-600 text-lg">
                  Panel de miembros en desarrollo...
                </p>
              </div>
            )}

            {activeTab === "codigos" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Gestión de Códigos QR
                </h2>
                <p className="text-gray-600 text-lg">
                  Panel de códigos QR en desarrollo...
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Event Form Modal */}
      {showForm && (
        <AdminEventFormModal
          formData={formData}
          setFormData={setFormData}
          editingEvento={editingEvento}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </AdminLayout>
  );
}
