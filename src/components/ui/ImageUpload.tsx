import React from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  selectedImage: File | null;
  onImageSelect: (file: File | null) => void;
  label?: string;
}

export default function ImageUpload({
  selectedImage,
  onImageSelect,
  label = "Imagen",
}: ImageUploadProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => onImageSelect(acceptedFiles[0] || null),
  });

  return (
    <div>
      <label className="block text-sm font-normal text-gray-700 mb-2">
        {label}
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
            Arrastra y suelta la imagen o haz click para seleccionar
          </p>
        )}
        {selectedImage && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="mx-auto max-h-48 rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">{selectedImage.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
