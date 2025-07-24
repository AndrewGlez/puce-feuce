import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import type { Eventos } from "../../../types/Eventos";

interface AdminEventsSectionProps {
  eventos: Eventos[];
  onNew: () => void;
  onEdit: (evento: Eventos) => void;
  onDelete: (id: string) => void;
  formatDate: (date: Date) => string;
}

export default function AdminEventsSection({
  eventos,
  onNew,
  onEdit,
  onDelete,
  formatDate,
}: AdminEventsSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Lista de eventos
        </h2>
        <button
          onClick={onNew}
          className="flex items-center cursor-pointer px-6 py-3 bg-feuce-primary text-white rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg font-medium"
        >
          <IconPlus className="w-5 h-5 mr-2" />
          Nuevo Evento
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                Título
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                Fecha
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                Enlace
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento) => (
              <tr
                key={evento._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-gray-800 font-medium">
                  {evento.titulo}
                </td>
                <td className="py-4 px-6 text-gray-600">
                  {formatDate(evento.fecha_inicio)}
                </td>
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
                      onClick={() => onEdit(evento)}
                      className="p-3 bg-blue-100 cursor-pointer text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200 shadow-sm"
                    >
                      <IconEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onDelete(evento._id!)}
                      className="p-3 bg-orange-100 cursor-pointer text-orange-600 rounded-lg hover:bg-orange-200 transition-all duration-200 shadow-sm"
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
  );
}
