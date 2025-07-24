import AcademicIcon from "../../assets/academic-icon";
import Button from "../ui/Button";
import { LogoPlaceholder2 } from "../../assets";
import { useState } from "react";

export default function ReclamosPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-[#f7fafd] flex flex-col items-center py-10 px-2 font-geologica">
      <h1 className="text-3xl md:text-4xl font-bold text-feuce-primary mb-8 text-center">
        Atención de Reclamos
      </h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mb-10">
        {/* Chat Anónimo */}
        <div className="flex-1 bg-feuce-primary rounded-xl p-8 flex flex-col justify-between text-white shadow-lg min-w-[320px] max-w-[420px]">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              Chat Anónimo
            </h2>
            <p className="text-base mb-6 text-white">
              Envía tus reclamos, sugerencias o inquietudes de forma
              completamente anónima. Tu identidad estará protegida mientras
              recibas la atención que necesitas.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <span className="text-white">100% anónimo y confidencial</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-white">
                  Respuesta en menos de 48 horas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
                <span className="text-white">
                  Seguimiento de tu caso hasta su resolución
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Chat UI */}
        <div className="flex-1 bg-[#eaf3f9] rounded-xl p-6 shadow-lg flex flex-col min-w-[320px] max-w-[600px]">
          <div className="bg-[#eaf3f9] rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2 mb-2">
              <div className="bg-feuce-primary rounded-full p-2 flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src={LogoPlaceholder2}
                  alt="FEUCE Logo"
                />
              </div>
              <div className="flex-1">
                <p className="text-feuce-primary text-base font-medium">
                  Hola, soy el asistente de FEUCE sede Esmeraldas. ¿En qué puedo
                  ayudarte hoy? Tu mensaje será completamente anónimo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-feuce-primary rounded-full p-2 flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src={LogoPlaceholder2}
                  alt="FEUCE Logo"
                />
              </div>
              <div className="flex-1">
                <div className="mb-1 font-semibold text-feuce-primary">
                  Selecciona el tipo de reclamo o sugerencia que deseas
                  realizar:
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    className={`justify-start px-4 text-left font-medium border-2 ${
                      selectedType === "academico"
                        ? "bg-[#eaf3f9] border-[#0a2540] text-feuce-primary"
                        : "bg-white border-[#d9d9d9] text-feuce-primary hover:bg-[#f2f6fa]"
                    }`}
                    onClick={() => setSelectedType("academico")}
                  >
                    <span className="flex items-center gap-2">
                      <AcademicIcon className="w-5 h-5" /> Académico
                    </span>
                  </Button>
                  <Button
                    className={`justify-start px-4 text-left font-medium border-2 ${
                      selectedType === "administrativo"
                        ? "bg-[#eaf3f9] border-[#1e7e34] text-[#1e7e34]"
                        : "bg-white border-[#d9d9d9] text-[#1e7e34] hover:bg-[#f2f6fa]"
                    }`}
                    onClick={() => setSelectedType("administrativo")}
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
                      </svg>
                      Administrativo
                    </span>
                  </Button>
                  <Button
                    className={`justify-start px-4 text-left font-medium border-2 ${
                      selectedType === "sugerencia"
                        ? "bg-[#f6e9fa] border-[#a020f0] text-[#a020f0]"
                        : "bg-white border-[#d9d9d9] text-[#a020f0] hover:bg-[#f6e9fa]"
                    }`}
                    onClick={() => setSelectedType("sugerencia")}
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                      </svg>
                      Sugerencia
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Input de mensaje */}
          <div className="flex items-end gap-2 mt-auto">
            <input
              type="text"
              className="flex-1 border border-[#d9d9d9] rounded-lg px-4 py-2 text-feuce-primary focus:outline-none focus:ring-2 focus:ring-[#0a2540] bg-white"
              placeholder="Escribe tu mensaje aquí..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!selectedType}
            />
            <button
              className="bg-feuce-primary rounded-full p-3 flex items-center justify-center text-white disabled:opacity-50"
              disabled
              tabIndex={-1}
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="text-xs text-gray-400 mt-2 text-center">
            Tu identidad permanecerá anónima. Nos comprometemos a atender tu
            caso con la mayor discreción.
          </div>
        </div>
      </div>
      {/* Tipos de reclamos */}
      <div className="w-full max-w-6xl mt-4">
        <h2 className="text-xl md:text-2xl font-semibold text-feuce-primary mb-6">
          Tipos de reclamos que puedes presentar:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Académico */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-[#0a2540]">
            <AcademicIcon className="w-12 h-12 mb-3 text-feuce-primary" />
            <div className="text-lg font-bold text-feuce-primary mb-2">
              Académico
            </div>
            <div className="text-gray-600 text-sm">
              Problemas con calificaciones, horarios, profesores o cualquier
              situación relacionada con tu formación académica.
            </div>
          </div>
          {/* Administrativo */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-[#1e7e34]">
            <svg
              className="w-12 h-12 mb-3 text-[#1e7e34]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
            </svg>
            <div className="text-lg font-bold text-[#1e7e34] mb-2">
              Administrativo
            </div>
            <div className="text-gray-600 text-sm">
              Dificultades con trámites, pagos, inscripciones, becas o cualquier
              proceso administrativo de la universidad.
            </div>
          </div>
          {/* Sugerencias */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-[#a020f0]">
            <svg
              className="w-12 h-12 mb-3 text-[#a020f0]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <div className="text-lg font-bold text-[#a020f0] mb-2">
              Sugerencias
            </div>
            <div className="text-gray-600 text-sm">
              Ideas para mejorar la vida universitaria, actividades, servicios o
              cualquier aspecto de la comunidad estudiantil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
