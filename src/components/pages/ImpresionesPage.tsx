import React from "react";

export default function ImpresionesPage() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">Servicio de Impresiones</h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* QR y mensaje */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow p-8 w-full md:w-[340px] min-h-[340px] justify-center">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4 border border-dashed border-gray-300">
              <span className="text-lg text-gray-500 font-semibold">Código QR en desarrollo</span>
            </div>
            <div className="text-lg font-bold text-[#0A233F] text-center mt-2">Escanea para solicitar impresiones</div>
            <div className="text-sm text-[#0A233F] text-center mt-1">Servicio disponible: Lun-Vie 9:00 - 16:00</div>
          </div>
        </div>
        {/* Instrucciones */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0A233F]">Instrucciones para solicitar impresiones</h3>
            <ol className="list-decimal list-inside space-y-2 text-[#0A233F]">
              <li>
                <span className="font-bold">Escanea el código QR</span>
                <div className="text-gray-600 font-normal text-base ml-4">Utiliza la cámara de tu teléfono para escanear el código y abrir el chat de WhatsApp.</div>
              </li>
              <li>
                <span className="font-bold">Envía tu archivo</span>
                <div className="text-gray-600 font-normal text-base ml-4">Adjunta el documento que deseas imprimir (PDF, Word, PowerPoint, etc.).</div>
              </li>
              <li>
                <span className="font-bold">Especifica los detalles</span>
                <div className="text-gray-600 font-normal text-base ml-4">Indica: número de copias, color/blanco y negro, tamaño de papel, y si necesitas engrapado.</div>
              </li>
              <li>
                <span className="font-bold">Confirma tu pedido</span>
                <div className="text-gray-600 font-normal text-base ml-4">Recibirás una confirmación con el costo total.</div>
              </li>
              <li>
                <span className="font-bold">Recoge tu impresión</span>
                <div className="text-gray-600 font-normal text-base ml-4">Acércate a la oficina de FEUCE con tu carnet estudiantil para retirar y pagar tu pedido.</div>
              </li>
            </ol>
          </div>
          <div className="bg-[#E6F1F7] border border-[#B6D4E6] rounded-lg p-4 flex items-start gap-2 mt-4">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="12" fill="#B6D4E6"/><path d="M12 8v4" stroke="#0A233F" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#0A233F"/></svg>
            <div>
              <span className="font-bold text-[#0A233F]">Nota:</span>
              <span className="text-[#0A233F] ml-1">El servicio de impresiones tiene un costo preferencial para estudiantes. Los fondos recaudados son utilizados para actividades estudiantiles organizadas por la FEUCE.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
