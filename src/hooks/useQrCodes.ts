import useSWR from "swr";
import { fetcher } from "../services/fetcher";
import type { QrCode } from "../types/QrCode";

export function useQrCodes() {
  const { data, error, mutate } = useSWR<QrCode[]>("/qrcodes", fetcher);

  return {
    data: data || [],
    loading: !error && !data,
    error,
    mutate,
  };
}
