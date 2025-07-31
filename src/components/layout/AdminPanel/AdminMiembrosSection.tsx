import React from "react";
import type { Miembro } from "../../../types/Miembros";
import { IconEdit, IconTrash, IconUser } from "@tabler/icons-react";

interface AdminMiembrosSectionProps {
  miembros: Miembro[];
  onNew: () => void;
  onEdit: (miembro: Miembro) => void;
  onDelete: (id: string) => void;
}

export default function AdminMiembrosSection({
  miembros,
  onNew,
  onEdit,
  onDelete,
}: AdminMiembrosSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Miembros de la FEUCE
          </h2>
          <p className="text-gray-600">Listado de Miembros</p>
        </div>
        <button
          onClick={onNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          <span>+</span>
          <span>Nuevo miembro</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Foto
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Nombres
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Cargo
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Correo Institucional
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {miembros.map((miembro) => (
              <tr
                key={miembro._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-4 px-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {miembro.image ? (
                      <img
                        src={`http://localhost:3000${miembro.image}`}
                        alt={miembro.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <IconUser className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-900">
                    {miembro.name}
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {miembro.role}
                </td>
                <td className="py-4 px-4">
                  <a
                    href={`mailto:${miembro.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                  >
                    {miembro.email}
                  </a>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onEdit(miembro)}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                      title="Editar"
                    >
                      <IconEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onDelete(miembro._id!)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-150"
                      title="Eliminar"
                    >
                      <IconTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {miembros.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay miembros registrados
          </div>
        )}
      </div>
    </div>
  );
} 