import React, { useState } from "react";
import type { Miembro } from "../../../types/Miembros";
import { IconX } from "@tabler/icons-react";

interface AdminMiembroFormModalProps {
  formData: Partial<Miembro>;
  setFormData: (data: Partial<Miembro>) => void;
  editingMiembro: Miembro | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent, file: File | null) => void;
  responseError: string | null;
  isSubmitting?: boolean;
}

export default function AdminMiembroFormModal({
  formData,
  setFormData,
  editingMiembro,
  onClose,
  onSubmit,
  responseError,
  isSubmitting = false,
}: AdminMiembroFormModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const roles = [
    "Presidente",
    "Vicepresidente",
    "Tesorero",
    "Secretario",
    "Vocal",
    "Coordinador",
    "Miembro",
  ];

  const departments = [
    "Administración",
    "Académico",
    "Comunicación",
    "Eventos",
    "Finanzas",
    "Relaciones Públicas",
    "Otros",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {editingMiembro ? "Editar Miembro" : "Nuevo Miembro"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>

          <form
            onSubmit={(e) => onSubmit(e, selectedFile)}
            className="space-y-6"
          >
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombres completos *
              </label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Juan Pérez"
                required
              />
            </div>

            {/* Cargo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cargo *
              </label>
              <select
                value={formData.role || ""}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Seleccionar cargo</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Departamento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departamento *
              </label>
              <select
                value={formData.department || ""}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Seleccionar departamento</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo institucional *
              </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ejemplo@pucese.edu.ec"
                required
              />
            </div>

            {/* Foto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto de perfil
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                accept="image/*"
              />
              <p className="text-sm text-gray-500 mt-1">
                Formatos permitidos: JPG, PNG, GIF
              </p>
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
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-feuce-primary hover:bg-blue-700"
                } text-white`}
              >
                {isSubmitting
                  ? "Guardando..."
                  : (editingMiembro ? "Actualizar" : "Crear") + " Miembro"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
