import useSWR from "swr";
import type { Miembro } from "../types/Miembros";
import { fetcher } from "../services/fetcher";

/**
 * Este hook utiliza SWR para obtener una lista de miembros
 * desde el endpoint "/miembros".
 */
export function useMiembros() {
  return useSWR<Miembro[]>("/miembros", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 0,
  });
} 