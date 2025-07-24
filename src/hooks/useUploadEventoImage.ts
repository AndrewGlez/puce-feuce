import useSWRMutation from "swr/mutation";
import type { Eventos } from "../types/Eventos";
import { postFetcher } from "../services/fetcher";

// Response type for image upload
interface UploadResponse {
  message: string;
  fileUrl: string;
  event: Eventos;
}

/**
 * Hook para subir una imagen de evento.
 * @param eventId - El ID del evento al que se asociará la imagen.
 */
export function useUploadEventoImage(eventId: string) {
  return useSWRMutation<UploadResponse, Error, string, FormData>(
    `/eventos/${eventId}/upload`,
    (url, { arg }) => postFetcher(url, arg)
  );
}
