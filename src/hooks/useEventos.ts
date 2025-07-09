import useSWR from "swr";
import type { Eventos } from "../types/Eventos";

export function useEventos() {
  return useSWR<Eventos[]>("/eventos");
}
