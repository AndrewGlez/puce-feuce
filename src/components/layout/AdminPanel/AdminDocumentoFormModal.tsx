import React, { useState } from "react";
import type { Documento } from "../../../types/Documentos";
import { IconX } from "@tabler/icons-react";

interface AdminDocumentoFormModalProps {
  formData: Partial<Documento>;
  setFormData: (data: Partial<Documento>) => void;
  editingDocumento: Documento | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent, file: File | null) => void;
  responseError: string | null;
}

export default function AdminDocumentoFormModal({
  formData,
  setFormData,
  editingDocumento,
  onClose,
  onSubmit,
  responseError,
}: AdminDocumentoFormModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const categories = ["Reglamento", "Instructivo", "Manual", "Otros"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {editingDocumento ? "Editar Documento" : "Nuevo Documento"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={(e) => onSubmit(e, selectedFile)} className="space-y-6">
            {/* Nombre del documento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del documento *
              </label>
              <input
                type="text"
                value={formData.nombre || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Estatuto FEUCE"
                required
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría *
              </label>
              <select
                value={formData.categoria || ""}
                onChange={(e) =>
                  setFormData({ ...formData, categoria: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Seleccionar categoría</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha *
              </label>
              <input
                type="date"
                value={
                  formData.fecha
                    ? new Date(formData.fecha).toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fecha: new Date(e.target.value),
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Archivo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Archivo *
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                accept=".pdf,.doc,.docx,.txt"
                required={!editingDocumento}
              />
              {editingDocumento && (
                <p className="text-sm text-gray-500 mt-1">
                  Deje vacío para mantener el archivo actual
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Formatos permitidos: PDF, DOC, DOCX, TXT
              </p>
            </div>

            {/* Disponible */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="disponible"
                checked={formData.disponible !== false}
                onChange={(e) =>
                  setFormData({ ...formData, disponible: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="disponible" className="ml-2 text-sm text-gray-700">
                Documento disponible para descarga
              </label>
            </div>

            {/* Error message */}
            {responseError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {responseError}
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {editingDocumento ? "Actualizar" : "Crear"} Documento
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 