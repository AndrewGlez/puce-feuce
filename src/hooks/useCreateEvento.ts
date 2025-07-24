import useSWRMutation from "swr/mutation";
import type { Eventos } from "../types/Eventos";
import { postFetcher } from "../services/fetcher";

// Define el tipo para los parámetros de creación de evento
export type EventoCreationParams = Omit<
  Eventos,
  "_id" | "createdAt" | "updatedAt"
>;

/**
 * Hook para crear un nuevo evento utilizando SWR mutation.
 * Devuelve una función de activación para enviar datos y estados de datos/error.
 */
export function useCreateEvento() {
  return useSWRMutation<Eventos, Error, string, EventoCreationParams>(
    "/eventos",
    (url, { arg }) => postFetcher(url, arg)
  );
}
