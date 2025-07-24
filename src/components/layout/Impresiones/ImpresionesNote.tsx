import React from "react";

export default function ImpresionesNote() {
  return (
    <div className="bg-[#E6F1F7] border border-[#B6D4E6] rounded-lg p-4 flex items-start gap-2 mt-4">
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="mt-1"
      >
        <circle cx="12" cy="12" r="12" fill="#B6D4E6" />
        <path
          d="M12 8v4"
          stroke="#0A233F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill="#0A233F" />
      </svg>
      <div>
        <span className="font-bold text-[#0A233F]">Nota:</span>
        <span className="text-[#0A233F] ml-1">
          El servicio de impresiones tiene un costo preferencial para
          estudiantes. Los fondos recaudados son utilizados para actividades
          estudiantiles organizadas por la FEUCE.
        </span>
      </div>
    </div>
  );
}
