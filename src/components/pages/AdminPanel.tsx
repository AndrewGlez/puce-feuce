/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Eventos } from "../../types/Eventos";
import type { Documento } from "../../types/Documentos";
import type { Miembro } from "../../types/Miembros";
import { useEventos } from "../../hooks/useEventos";
import { useDocumentos } from "../../hooks/useDocumentos";
import { useMiembros } from "../../hooks/useMiembros";
import AdminLayout from "../layout/AdminPanel/AdminLayout";
import AdminEventsSection from "../layout/AdminPanel/AdminEventsSection";
import AdminEventFormModal from "../layout/AdminPanel/AdminEventFormModal";
import AdminDocumentosSection from "../layout/AdminPanel/AdminDocumentosSection";
import AdminDocumentoFormModal from "../layout/AdminPanel/AdminDocumentoFormModal";
import AdminMiembrosSection from "../layout/AdminPanel/AdminMiembrosSection";
import AdminMiembroFormModal from "../layout/AdminPanel/AdminMiembroFormModal";
import { axiosInstance } from "../../services/fetcher";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("eventos");
  const { data: eventos = [], mutate: mutateEventos } = useEventos();
  const { data: documentos = [], mutate: mutateDocumentos } = useDocumentos();
  const { data: miembros = [], mutate: mutateMiembros } = useMiembros();
  
  // Estados para eventos
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvento, setEditingEvento] = useState<Eventos | null>(null);
  const [eventFormData, setEventFormData] = useState<Partial<Eventos>>({
    titulo: "",
    descripcion: "",
    fecha_inicio: new Date(),
    tipo_evento: "conferencia",
    enlace: "",
    etiquetaEnlace: "Más Información",
    ubicacion: "",
    estado: "Inscripciones Abiertas",
  });
  
  // Estados para documentos
  const [showDocumentoForm, setShowDocumentoForm] = useState(false);
  const [editingDocumento, setEditingDocumento] = useState<Documento | null>(null);
  const [documentoFormData, setDocumentoFormData] = useState<Partial<Documento>>({
    nombre: "",
    categoria: "",
    archivo: "",
    fecha: new Date(),
    disponible: true,
  });
  
  // Estados para miembros
  const [showMiembroForm, setShowMiembroForm] = useState(false);
  const [editingMiembro, setEditingMiembro] = useState<Miembro | null>(null);
  const [miembroFormData, setMiembroFormData] = useState<Partial<Miembro>>({
    name: "",
    role: "",
    department: "",
    email: "",
    image: "",
  });
  
  const [responseError, setResponseError] = useState<string | null>(null);

  // Handlers para eventos
  const handleEventSubmit = async (e: React.FormEvent, file: File | null) => {
    e.preventDefault();
    setResponseError(null);
    try {
      const payload = {
        ...eventFormData,
        fecha_inicio: (eventFormData.fecha_inicio as Date).toISOString(),
        ...(eventFormData.fecha_fin && {
          fecha_fin: (eventFormData.fecha_fin as Date).toISOString(),
        }),
      };
      const result = editingEvento
        ? await axiosInstance.put(`/eventos/${editingEvento._id}`, payload)
        : await axiosInstance.post("/eventos", payload);
      if (result.status === 200 || result.status === 201) {
        if (!editingEvento && file) {
          try {
            const formDataImg = new FormData();
            formDataImg.append("file", file);
            await axiosInstance.post(
              `/${result.data._id}/upload`,
              formDataImg,
              { headers: { "Content-Type": "multipart/form-data" } }
            );
          } catch (uploadError) {
            console.error("Error uploading image:", uploadError);
            setResponseError(
              (uploadError as any)?.response?.data?.message ||
                "Error subiendo imagen."
            );
          }
        }
        setShowEventForm(false);
        setEditingEvento(null);
        setEventFormData({
          titulo: "",
          descripcion: "",
          fecha_inicio: new Date(),
          tipo_evento: "conferencia",
          enlace: "",
          etiquetaEnlace: "Más Información",
          ubicacion: "",
          estado: "Inscripciones Abiertas",
        });
        mutateEventos();
        setResponseError(null);
      }
    } catch (error) {
      console.error("Error saving evento:", error);
      setResponseError(
        (error as any)?.response?.data?.message || "Error guardando evento."
      );
    }
  };

  // Handlers para documentos
  const handleDocumentoSubmit = async (e: React.FormEvent, file: File | null) => {
    e.preventDefault();
    setResponseError(null);
    
    if (!editingDocumento && !file) {
      setResponseError("Debe seleccionar un archivo para crear un nuevo documento.");
      return;
    }
    
    try {
      if (editingDocumento) {
        // Actualizar documento existente
        const payload = {
          ...documentoFormData,
          fecha: (documentoFormData.fecha as Date).toISOString(),
        };
        
        const result = await axiosInstance.put(`/documentos/${editingDocumento._id}`, payload);
        
        if (result.status === 200) {
          setShowDocumentoForm(false);
          setEditingDocumento(null);
          setDocumentoFormData({
            nombre: "",
            categoria: "",
            archivo: "",
            fecha: new Date(),
            disponible: true,
          });
          mutateDocumentos();
          setResponseError(null);
        }
      } else {
        // Crear nuevo documento con archivo
        if (!file) {
          setResponseError("Debe seleccionar un archivo.");
          return;
        }
        
        // Primero subir el archivo
        const formDataFile = new FormData();
        formDataFile.append("file", file);
        
        // Crear un documento temporal con un nombre de archivo
        const tempFileName = `temp_${Date.now()}_${file.name}`;
        const payload = {
          ...documentoFormData,
          archivo: tempFileName,
          fecha: (documentoFormData.fecha as Date).toISOString(),
        };
        
        const result = await axiosInstance.post("/documentos", payload);
        
        if (result.status === 201) {
                      // Ahora subir el archivo real
            try {
              await axiosInstance.post(
                `/docs/${result.data._id}/upload`,
                formDataFile,
                { headers: { "Content-Type": "multipart/form-data" } }
              );
            } catch (uploadError) {
            console.error("Error uploading file:", uploadError);
            setResponseError(
              (uploadError as any)?.response?.data?.message ||
                "Error subiendo archivo."
            );
            return;
          }
          
          setShowDocumentoForm(false);
          setEditingDocumento(null);
          setDocumentoFormData({
            nombre: "",
            categoria: "",
            archivo: "",
            fecha: new Date(),
            disponible: true,
          });
          mutateDocumentos();
          setResponseError(null);
        }
      }
    } catch (error) {
      console.error("Error saving documento:", error);
      setResponseError(
        (error as any)?.response?.data?.message || "Error guardando documento."
      );
    }
  };

  // Handlers para miembros
  const handleMiembroSubmit = async (e: React.FormEvent, file: File | null) => {
    e.preventDefault();
    setResponseError(null);
    try {
      let result;
      if (editingMiembro) {
        result = await axiosInstance.put(`/miembros/${editingMiembro._id}`, miembroFormData);
      } else {
        result = await axiosInstance.post("/miembros", miembroFormData);
      }
      
      if (result.status === 200 || result.status === 201) {
        if (!editingMiembro && file) {
          try {
            const formDataImg = new FormData();
            formDataImg.append("file", file);
            await axiosInstance.post(
              `/members/${result.data._id}/upload`,
              formDataImg,
              { headers: { "Content-Type": "multipart/form-data" } }
            );
          } catch (uploadError) {
            console.error("Error uploading image:", uploadError);
            setResponseError(
              (uploadError as any)?.response?.data?.message ||
                "Error subiendo imagen."
            );
          }
        }
        setShowMiembroForm(false);
        setEditingMiembro(null);
        setMiembroFormData({
          name: "",
          role: "",
          department: "",
          email: "",
          image: "",
        });
        mutateMiembros();
        setResponseError(null);
      }
    } catch (error) {
      console.error("Error saving miembro:", error);
      setResponseError(
        (error as any)?.response?.data?.message || "Error guardando miembro."
      );
    }
  };

  // Handlers para eventos
  const handleEventEdit = (evento: Eventos) => {
    setEditingEvento(evento);
    setEventFormData({
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
    setShowEventForm(true);
  };

  const handleEventDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      try {
        const res = await axiosInstance.delete(`/eventos/${id}`);
        if (res.status === 200) {
          mutateEventos();
        }
      } catch (error) {
        console.error("Error deleting evento:", error);
      }
    }
  };

  // Handlers para documentos
  const handleDocumentoEdit = (documento: Documento) => {
    setEditingDocumento(documento);
    setDocumentoFormData({
      nombre: documento.nombre,
      categoria: documento.categoria,
      archivo: documento.archivo,
      fecha: new Date(documento.fecha),
      disponible: documento.disponible,
    });
    setShowDocumentoForm(true);
  };

  const handleDocumentoDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este documento?")) {
      try {
        const res = await axiosInstance.delete(`/documentos/${id}`);
        if (res.status === 200) {
          mutateDocumentos();
        }
      } catch (error) {
        console.error("Error deleting documento:", error);
      }
    }
  };

  // Handlers para miembros
  const handleMiembroEdit = (miembro: Miembro) => {
    setEditingMiembro(miembro);
    setMiembroFormData({
      name: miembro.name,
      role: miembro.role,
      department: miembro.department,
      email: miembro.email,
      image: miembro.image,
    });
    setShowMiembroForm(true);
  };

  const handleMiembroDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este miembro?")) {
      try {
        const res = await axiosInstance.delete(`/miembros/${id}`);
        if (res.status === 200) {
          mutateMiembros();
        }
      } catch (error) {
        console.error("Error deleting miembro:", error);
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
        {activeTab === "eventos" && (
          <AdminEventsSection
            eventos={eventos}
            onNew={() => {
              setEditingEvento(null);
              setEventFormData({
                titulo: "",
                descripcion: "",
                fecha_inicio: new Date(),
                tipo_evento: "conferencia",
                enlace: "",
                etiquetaEnlace: "Más Información",
                ubicacion: "",
                estado: "Inscripciones Abiertas",
              });
              setShowEventForm(true);
            }}
            onEdit={handleEventEdit}
            onDelete={handleEventDelete}
            formatDate={formatDate}
          />
        )}

        {activeTab === "documentos" && (
          <AdminDocumentosSection
            documentos={documentos}
            onNew={() => {
              setEditingDocumento(null);
              setDocumentoFormData({
                nombre: "",
                categoria: "",
                archivo: "",
                fecha: new Date(),
                disponible: true,
              });
              setShowDocumentoForm(true);
            }}
            onEdit={handleDocumentoEdit}
            onDelete={handleDocumentoDelete}
            formatDate={formatDate}
          />
        )}

        {activeTab === "miembros" && (
          <AdminMiembrosSection
            miembros={miembros}
            onNew={() => {
              setEditingMiembro(null);
              setMiembroFormData({
                name: "",
                role: "",
                department: "",
                email: "",
                image: "",
              });
              setShowMiembroForm(true);
            }}
            onEdit={handleMiembroEdit}
            onDelete={handleMiembroDelete}
          />
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
      </main>

      {/* Event Form Modal */}
      {showEventForm && (
        <AdminEventFormModal
          formData={eventFormData}
          setFormData={setEventFormData}
          editingEvento={editingEvento}
          onClose={() => {
            setShowEventForm(false);
            setResponseError(null);
          }}
          onSubmit={handleEventSubmit}
          responseError={responseError}
        />
      )}

      {/* Documento Form Modal */}
      {showDocumentoForm && (
        <AdminDocumentoFormModal
          formData={documentoFormData}
          setFormData={setDocumentoFormData}
          editingDocumento={editingDocumento}
          onClose={() => {
            setShowDocumentoForm(false);
            setResponseError(null);
          }}
          onSubmit={handleDocumentoSubmit}
          responseError={responseError}
        />
      )}

      {/* Miembro Form Modal */}
      {showMiembroForm && (
        <AdminMiembroFormModal
          formData={miembroFormData}
          setFormData={setMiembroFormData}
          editingMiembro={editingMiembro}
          onClose={() => {
            setShowMiembroForm(false);
            setResponseError(null);
          }}
          onSubmit={handleMiembroSubmit}
          responseError={responseError}
        />
      )}
    </AdminLayout>
  );
}
