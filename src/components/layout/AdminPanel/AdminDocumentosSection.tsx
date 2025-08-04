import React from "react";
import type { Documento } from "../../../types/Documentos";
import { IconTrash, IconEdit } from "@tabler/icons-react";

interface AdminDocumentosSectionProps {
  documentos: Documento[];
  onNew: () => void;
  onEdit: (documento: Documento) => void;
  onDelete: (id: string) => void;
  formatDate: (date: Date) => string;
}

export default function AdminDocumentosSection({
  documentos,
  onNew,
  onEdit,
  onDelete,
  formatDate,
}: AdminDocumentosSectionProps) {
  const [filterCategory, setFilterCategory] = React.useState("Todas");

  const categories = ["Todas", "Reglamento", "Instructivo", "Manual", "Otros"];

  const filteredDocumentos = documentos.filter(
    (doc) => filterCategory === "Todas" || doc.categoria === filterCategory
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Documentos Importantes
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Filtrar por categoría</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={onNew}
          className="bg-feuce-primary hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          <span>+</span>
          <span>Subir documento</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Título
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Fecha
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Categoría
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Peso
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDocumentos.map((documento) => (
              <tr
                key={documento._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-900">
                    {documento.nombre}
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {formatDate(documento.fecha)}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {documento.categoria}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onEdit(documento)}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                      title="Editar"
                    >
                      <IconEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onDelete(documento._id!)}
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

        {filteredDocumentos.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay documentos disponibles
          </div>
        )}
      </div>
    </div>
  );
}
