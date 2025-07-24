import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import type { Eventos } from "../../../types/Eventos";

interface AdminEventFormModalProps {
  formData: Partial<Eventos>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Eventos>>>;
  editingEvento: Eventos | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent, file: File | null) => void;
}

export default function AdminEventFormModal({
  formData,
  setFormData,
  editingEvento,
  onClose,
  onSubmit,
}: AdminEventFormModalProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // Configurar zona de arrastre y clic para cargar imagen
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => setSelectedImage(acceptedFiles[0] || null),
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-normal text-gray-800">
              {editingEvento ? "Editar Evento" : "Nuevo Evento"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>

          <form
            onSubmit={(e) => onSubmit(e, selectedImage)}
            className="space-y-6"
          >
            {/* Título */}
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                required
                value={formData.titulo || ""}
                onChange={(e) =>
                  setFormData({ ...formData, titulo: e.target.value })
                }
                className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">
                Descripción *
              </label>
              <textarea
                required
                value={formData.descripcion || ""}
                onChange={(e) =>
                  setFormData({ ...formData, descripcion: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Fechas */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Fecha de Inicio *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={
                    formData.fecha_inicio
                      ? new Date(formData.fecha_inicio)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fecha_inicio: new Date(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Fecha de Fin
                </label>
                <input
                  type="datetime-local"
                  value={
                    formData.fecha_fin
                      ? new Date(formData.fecha_fin).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fecha_fin: e.target.value
                        ? new Date(e.target.value)
                        : undefined,
                    })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Tipo y Estado */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  required
                  value={formData.tipo_evento}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tipo_evento: e.target.value as Eventos["tipo_evento"],
                    })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Estado *
                </label>
                <select
                  required
                  value={formData.estado}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estado: e.target.value as Eventos["estado"],
                    })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                >
                  <option value="Inscripciones Abiertas">
                    Inscripciones Abiertas
                  </option>
                  <option value="Próximamente">Próximamente</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>
            </div>

            {/* Enlace, Etiqueta, Ubicación, Imagen */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Enlace
                </label>
                <input
                  type="url"
                  value={formData.enlace || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, enlace: e.target.value })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Etiqueta del Enlace
                </label>
                <input
                  type="text"
                  value={formData.etiquetaEnlace || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, etiquetaEnlace: e.target.value })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">
                Ubicación
              </label>
              <input
                type="text"
                value={formData.ubicacion || ""}
                onChange={(e) =>
                  setFormData({ ...formData, ubicacion: e.target.value })
                }
                className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">
                Imagen
              </label>
              <div
                {...getRootProps()}
                className="w-full px-4 py-12 border-dashed border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center cursor-pointer"
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-gray-500">Suelta la imagen aquí...</p>
                ) : (
                  <p className="text-gray-500">
                    Arrastra y suelta la imagen o haz click para seleccionar
                  </p>
                )}
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="mt-4 mx-auto max-h-48"
                  />
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-feuce-primary text-white rounded-xl hover:bg-blue-800 transition-all duration-200 font-medium shadow-lg"
              >
                {editingEvento ? "Actualizar" : "Crear"} Evento
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
