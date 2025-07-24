import React from "react";

export default function ImpresionesInstructions() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-feuce-primary">
          Instrucciones para solicitar impresiones
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-feuce-primary">
          <li>
            <span className="font-semibold">Escanea el código QR</span>
            <div className="text-gray-600 font-normal text-base ml-4">
              Utiliza la cámara de tu teléfono para escanear el código y abrir
              el chat de WhatsApp.
            </div>
          </li>
          <li>
            <span className="font-semibold">Envía tu archivo</span>
            <div className="text-gray-600 font-normal text-base ml-4">
              Adjunta el documento que deseas imprimir (PDF, Word, PowerPoint,
              etc.).
            </div>
          </li>
          <li>
            <span className="font-semibold">Especifica los detalles</span>
            <div className="text-gray-600 font-normal text-base ml-4">
              Indica: número de copias, color/blanco y negro, tamaño de papel, y
              si necesitas engrapado.
            </div>
          </li>
          <li>
            <span className="font-semibold">Confirma tu pedido</span>
            <div className="text-gray-600 font-normal text-base ml-4">
              Recibirás una confirmación con el costo total.
            </div>
          </li>
          <li>
            <span className="font-semibold">Recoge tu impresión</span>
            <div className="text-gray-600 font-normal text-base ml-4">
              Acércate a la oficina de FEUCE con tu carnet estudiantil para
              retirar y pagar tu pedido.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
