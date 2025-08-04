import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import type { QrCode } from "../../../types/QrCode";

interface AdminQrCodeFormModalProps {
  formData: Partial<QrCode>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<QrCode>>>;
  editingQrCode: QrCode | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent, file: File | null) => void;
  responseError?: string | null;
  isSubmitting?: boolean;
}

export default function AdminQrCodeFormModal({
  formData,
  setFormData,
  editingQrCode,
  onClose,
  onSubmit,
  responseError,
  isSubmitting = false,
}: AdminQrCodeFormModalProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Configurar zona de arrastre y clic para cargar imagen
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => setSelectedImage(acceptedFiles[0] || null),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.nombre?.trim()) {
      setErrorMessage("El nombre es obligatorio.");
      return;
    }

    if (!editingQrCode && !selectedImage) {
      setErrorMessage("Debe seleccionar una imagen para el código QR.");
      return;
    }

    setErrorMessage(null);
    onSubmit(e, selectedImage);
  };

  useEffect(() => {
    if ((responseError || errorMessage) && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [responseError, errorMessage]);

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
          className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingQrCode ? "Editar" : "Crear"} Código QR
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IconX size={24} />
              </button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Error messages */}
              {(errorMessage || responseError) && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {errorMessage || responseError}
                </div>
              )}

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={formData.nombre || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="Nombre del código QR"
                  required
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <textarea
                  value={formData.descripcion || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none"
                  placeholder="Descripción opcional del código QR"
                />
              </div>

              {/* Estado activo */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="activo"
                  checked={formData.activo !== false}
                  onChange={(e) =>
                    setFormData({ ...formData, activo: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="activo" className="ml-2 text-sm text-gray-700">
                  Código QR activo
                </label>
              </div>

              {/* Imagen del QR */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagen del Código QR {!editingQrCode && "*"}
                </label>
                <div
                  {...getRootProps()}
                  className="w-full px-4 py-12 border-dashed border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center cursor-pointer hover:border-blue-300 transition-colors"
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="text-gray-500">Suelta la imagen aquí...</p>
                  ) : (
                    <p className="text-gray-500">
                      Arrastra y suelta la imagen del QR o haz click para
                      seleccionar
                    </p>
                  )}
                  {selectedImage && (
                    <div className="mt-4">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Preview"
                        className="mx-auto max-h-48 rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        {selectedImage.name}
                      </p>
                    </div>
                  )}
                  {editingQrCode && !selectedImage && formData.imagen && (
                    <div className="mt-4">
                      <img
                        src={`http://localhost:3000${formData.imagen}`}
                        alt="Current QR"
                        className="mx-auto max-h-48 rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Imagen actual
                      </p>
                    </div>
                  )}
                </div>
                {editingQrCode && (
                  <p className="text-sm text-gray-500 mt-1">
                    Deje vacío para mantener la imagen actual
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 cursor-pointer text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-xl transition-all duration-200 font-medium shadow-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  } text-white`}
                >
                  {isSubmitting
                    ? "Guardando..."
                    : (editingQrCode ? "Actualizar" : "Crear") + " Código QR"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
