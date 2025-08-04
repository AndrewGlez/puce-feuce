import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import type { QrCode } from "../../../types/QrCode";

interface AdminQrCodesectionProps {
  qrCodes: QrCode[];
  onNew: () => void;
  onEdit: (qrCode: QrCode) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  formatDate: (date: Date) => string;
}

export default function AdminQrCodesSection({
  qrCodes,
  onNew,
  onEdit,
  onDelete,
  onToggleStatus,
  formatDate,
}: AdminQrCodesectionProps) {
  const getStatusBadgeColor = (activo: boolean) => {
    return activo ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  const qrCode = qrCodes[0]; // Solo hay un código QR

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Código QR General</h2>
        {!qrCode && (
          <button
            onClick={onNew}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors font-medium shadow-lg"
          >
            <IconPlus size={20} />
            <span>Crear Código QR</span>
          </button>
        )}
      </div>

      {!qrCode ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <IconPlus size={48} className="mx-auto" />
          </div>
          <p className="text-gray-500 text-lg">No hay código QR creado</p>
          <p className="text-gray-400">
            Crea el código QR general para tu organización
          </p>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            {/* Imagen del QR */}
            <div className="flex justify-center mb-4">
              {qrCode.imagen ? (
                <img
                  src={`http://localhost:3000${qrCode.imagen}`}
                  alt={qrCode.nombre}
                  className="w-48 h-48 object-contain rounded-lg border border-gray-200"
                />
              ) : (
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Sin imagen</span>
                </div>
              )}
            </div>

            {/* Información del QR */}
            <div className="space-y-3 text-center">
              <h3 className="font-semibold text-xl text-gray-800">
                {qrCode.nombre}
              </h3>

              {qrCode.descripcion && (
                <p className="text-gray-600 text-sm">{qrCode.descripcion}</p>
              )}

              <div className="flex justify-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
                    qrCode.activo
                  )}`}
                >
                  {qrCode.activo ? "Activo" : "Inactivo"}
                </span>
              </div>

              <p className="text-gray-500 text-xs">
                Creado: {formatDate(new Date(qrCode.fechaCreacion))}
              </p>
            </div>

            {/* Acciones */}
            <div className="flex justify-center items-center space-x-4 mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => onToggleStatus(qrCode._id)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  qrCode.activo
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-green-600 hover:bg-green-50"
                }`}
                title={qrCode.activo ? "Desactivar" : "Activar"}
              >
                {qrCode.activo ? (
                  <IconEyeOff size={16} />
                ) : (
                  <IconEye size={16} />
                )}
                <span>{qrCode.activo ? "Desactivar" : "Activar"}</span>
              </button>

              <button
                onClick={() => onEdit(qrCode)}
                className="flex items-center space-x-1 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Editar"
              >
                <IconEdit size={16} />
                <span>Editar</span>
              </button>

              <button
                onClick={() => onDelete(qrCode._id)}
                className="flex items-center space-x-1 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Eliminar"
              >
                <IconTrash size={16} />
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
