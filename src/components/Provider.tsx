import type { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "../services/fetcher";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
