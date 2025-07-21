import React, { useState, useEffect } from "react";
import { LogoPlaceholder2 } from "../../assets";
import { IconCalendar, IconFileText, IconUsers, IconQrcode, IconLogout, IconPlus, IconEdit, IconTrash, IconX } from "@tabler/icons-react";

interface Evento {
  _id?: string;
  titulo: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
  tipo_evento: string;
  enlace: string;
  etiquetaEnlace?: string;
  imagen?: string;
  ubicacion?: string;
  estado: "Inscripciones Abiertas" | "Próximamente" | "Finalizado";
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("eventos");
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEvento, setEditingEvento] = useState<Evento | null>(null);
  const [formData, setFormData] = useState<Partial<Evento>>({
    titulo: "",
    descripcion: "",
    fecha_inicio: new Date(),
    tipo_evento: "conferencia",
    enlace: "",
    etiquetaEnlace: "Más Información",
    ubicacion: "",
    estado: "Inscripciones Abiertas"
  });

  useEffect(() => {
    if (activeTab === "eventos") {
      fetchEventos();
    }
  }, [activeTab]);

  const fetchEventos = async () => {
    try {
      const response = await fetch("http://localhost:3000/eventos");
      const data = await response.json();
      setEventos(data);
    } catch (error) {
      console.error("Error fetching eventos:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingEvento 
        ? `http://localhost:3000/eventos/${editingEvento._id}`
        : "http://localhost:3000/eventos";
      
      const method = editingEvento ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
          estado: "Inscripciones Abiertas"
        });
        fetchEventos();
      }
    } catch (error) {
      console.error("Error saving evento:", error);
    }
  };

  const handleEdit = (evento: Evento) => {
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
      estado: evento.estado
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      try {
        const response = await fetch(`http://localhost:3000/eventos/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchEventos();
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-[#0a2540] text-white flex flex-col">
        {/* Logo */}
        <div className="p-8 border-b border-gray-700">
          <div className="flex items-center">
            <img
              className="w-12 h-12 mr-4 filter brightness-0 invert"
              src={LogoPlaceholder2}
              alt="FEUCE Logo"
            />
            <div>
              <div className="font-bold text-xl">Feuce</div>
              <div className="text-sm text-gray-300 font-medium">ESMERALDAS</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setActiveTab("eventos")}
                className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeTab === "eventos"
                    ? "bg-white/10 text-white border-b-2 border-white shadow-lg"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <IconCalendar className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Eventos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("documentos")}
                className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeTab === "documentos"
                    ? "bg-white/10 text-white border-b-2 border-white shadow-lg"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <IconFileText className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Documentos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("miembros")}
                className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeTab === "miembros"
                    ? "bg-white/10 text-white border-b-2 border-white shadow-lg"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <IconUsers className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Miembros</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("codigos")}
                className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeTab === "codigos"
                    ? "bg-white/10 text-white border-b-2 border-white shadow-lg"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <IconQrcode className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Códigos QR</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-gray-700">
          <button className="w-full flex items-center justify-center px-6 py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-lg">
            <IconLogout className="w-6 h-6 mr-3" />
            <span className="font-medium text-lg">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-8">
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Lista de eventos</h2>
                <button
                  onClick={() => {
                    setEditingEvento(null);
                    setFormData({
                      titulo: "",
                      descripcion: "",
                      fecha_inicio: new Date(),
                      tipo_evento: "conferencia",
                      enlace: "",
                      etiquetaEnlace: "Más Información",
                      ubicacion: "",
                      estado: "Inscripciones Abiertas"
                    });
                    setShowForm(true);
                  }}
                  className="flex items-center px-6 py-3 bg-[#0a2540] text-white rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg font-medium"
                >
                  <IconPlus className="w-5 h-5 mr-2" />
                  + Nuevo Evento
                </button>
              </div>

              {/* Events Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg">Título</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg">Fecha</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg">Enlace</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventos.map((evento) => (
                      <tr key={evento._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-gray-800 font-medium">{evento.titulo}</td>
                        <td className="py-4 px-6 text-gray-600">{formatDate(evento.fecha_inicio)}</td>
                        <td className="py-4 px-6">
                          <a
                            href={evento.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                          >
                            Ver enlace
                          </a>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-3">
                            <button
                              onClick={() => handleEdit(evento)}
                              className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200 shadow-sm"
                            >
                              <IconEdit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(evento._id!)}
                              className="p-3 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-all duration-200 shadow-sm"
                            >
                              <IconTrash className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "documentos" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Documentos</h2>
              <p className="text-gray-600 text-lg">Panel de documentos en desarrollo...</p>
            </div>
          )}

          {activeTab === "miembros" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Miembros</h2>
              <p className="text-gray-600 text-lg">Panel de miembros en desarrollo...</p>
            </div>
          )}

          {activeTab === "codigos" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Códigos QR</h2>
              <p className="text-gray-600 text-lg">Panel de códigos QR en desarrollo...</p>
            </div>
          )}
        </main>
      </div>

      {/* Event Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingEvento ? "Editar Evento" : "Nuevo Evento"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <IconX className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Título *
                </label>
                <input
                  type="text"
                  required
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Descripción *
                </label>
                <textarea
                  required
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Fecha de Inicio *
                  </label>
                  <input
                    type="datetime-local"
                    required
                    value={formData.fecha_inicio ? new Date(formData.fecha_inicio).toISOString().slice(0, 16) : ""}
                    onChange={(e) => setFormData({...formData, fecha_inicio: new Date(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Fecha de Fin
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.fecha_fin ? new Date(formData.fecha_fin).toISOString().slice(0, 16) : ""}
                    onChange={(e) => setFormData({...formData, fecha_fin: e.target.value ? new Date(e.target.value) : undefined})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    required
                    value={formData.tipo_evento}
                    onChange={(e) => setFormData({...formData, tipo_evento: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  >
                    <option value="conferencia">Conferencia</option>
                    <option value="taller">Taller</option>
                    <option value="seminario">Seminario</option>
                    <option value="webinar">Webinar</option>
                    <option value="reunion">Reunión</option>
                    <option value="curso">Curso</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Estado *
                  </label>
                  <select
                    required
                    value={formData.estado}
                    onChange={(e) => setFormData({...formData, estado: e.target.value as any})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  >
                    <option value="Inscripciones Abiertas">Inscripciones Abiertas</option>
                    <option value="Próximamente">Próximamente</option>
                    <option value="Finalizado">Finalizado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Enlace
                </label>
                <input
                  type="url"
                  value={formData.enlace}
                  onChange={(e) => setFormData({...formData, enlace: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Etiqueta del Enlace
                </label>
                <input
                  type="text"
                  value={formData.etiquetaEnlace}
                  onChange={(e) => setFormData({...formData, etiquetaEnlace: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  value={formData.ubicacion}
                  onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  URL de Imagen
                </label>
                <input
                  type="url"
                  value={formData.imagen}
                  onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0a2540] text-white rounded-xl hover:bg-blue-800 transition-all duration-200 font-medium shadow-lg"
                >
                  {editingEvento ? "Actualizar" : "Crear"} Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
