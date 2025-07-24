import { useState } from "react";
import type { Eventos } from "../types/Eventos";

interface UseEventoFormProps {
  initialData?: Partial<Eventos>;
  onSubmit: (data: Partial<Eventos>, file: File | null) => void;
}

export function useEventoForm({
  initialData = {},
  onSubmit,
}: UseEventoFormProps) {
  const [formData, setFormData] = useState<Partial<Eventos>>(initialData);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = (): boolean => {
    // Validate required fields
    if (!formData.fecha_inicio) {
      setErrorMessage("La fecha de inicio es obligatoria.");
      return false;
    }

    // Validate that start date is not in the past
    const fechaInicio = new Date(formData.fecha_inicio);
    const now = new Date();
    if (fechaInicio < now) {
      setErrorMessage("La fecha de inicio debe estar en el futuro.");
      return false;
    }

    // Validate end date if provided
    if (formData.fecha_fin) {
      const fechaFin = new Date(formData.fecha_fin);
      if (fechaFin <= fechaInicio) {
        setErrorMessage(
          "La fecha de fin debe ser posterior a la fecha de inicio."
        );
        return false;
      }
    }

    setErrorMessage(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData, selectedImage);
    }
  };

  const updateFormData = (updates: Partial<Eventos>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  return {
    formData,
    setFormData: updateFormData,
    selectedImage,
    setSelectedImage,
    errorMessage,
    setErrorMessage,
    handleSubmit,
    validateForm,
  };
}
