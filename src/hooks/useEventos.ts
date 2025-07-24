import useSWR from "swr";
import type { Eventos } from "../types/Eventos";
import { fetcher } from "../services/fetcher";

/**
 * Este hook utiliza SWR para obtener una lista de eventos
 * desde el endpoint "/eventos".
 */
export function useEventos() {
  return useSWR<Eventos[]>("/eventos", fetcher);
}
