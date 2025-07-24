import React from "react";
import ImpresionesInstructions from "../layout/Impresiones/ImpresionesInstructions";
import ImpresionesNote from "../layout/Impresiones/ImpresionesNote";
import ImpresionesQR from "../layout/Impresiones/ImpresionesQR";

export default function ImpresionesPage() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white font-geologica">
      <h2 className="text-3xl md:text-4xl font-normal text-center mb-12 text-feuce-primary font-geologica">
        Servicio de Impresiones
      </h2>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* QR y mensaje */}
        <ImpresionesQR />

        {/* Instrucciones */}
        <div className="flex-1 flex flex-col gap-6">
          <ImpresionesInstructions />
          <ImpresionesNote />
        </div>
      </div>
    </section>
  );
}
