import { API_URL } from "../../../config/apiUrl";
import { useQrCodes } from "../../../hooks/useQrCodes";

export default function ImpresionesQR() {
  const QrCode = useQrCodes().data[0]?.imagen || "/default-qr-code.png"; // Fallback image if no QR code is available
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-8 w-full md:w-[340px] min-h-[340px] justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-40 h-40 flex items-center justify-center bg-white rounded-lg mb-4 border border-dashed border-gray-300">
          {/* <span className="text-lg text-gray-500 font-semibold">
          </span> */}
          <img src={`${API_URL}${QrCode}`} alt="Código QR para impresiones" />
        </div>
        <div className="text-lg font-semibold text-feuce-primary text-center mt-2">
          Escanea para solicitar impresiones
        </div>
        <div className="text-sm text-feuce-primary text-center mt-1">
          Servicio disponible: Lun-Vie 9:00 - 16:00
        </div>
      </div>
    </div>
  );
}
