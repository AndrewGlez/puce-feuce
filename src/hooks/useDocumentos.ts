import useSWR from "swr";
import type { Documento } from "../types/Documentos";
import { fetcher } from "../services/fetcher";

/**
 * Este hook utiliza SWR para obtener una lista de documentos
 * desde el endpoint "/documentos".
 */
export function useDocumentos() {
  return useSWR<Documento[]>("/documentos", fetcher);
} 