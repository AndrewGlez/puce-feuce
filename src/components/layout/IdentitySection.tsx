import React from "react";

function MissionIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="64" height="64">
      <path d="M8.16923 2.00234C8.11301 2.00078 8.0566 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.9434 13.9992 7.88699 13.9977 7.83077L15.7642 6.06422C15.9182 6.68407 16 7.33249 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C8.66751 0 9.31593 0.0817526 9.93578 0.235791L8.16923 2.00234Z" fill="#004666"></path>
      <path d="M4 7.99996C4 6.13612 5.27477 4.57002 7 4.12598V6.26752C6.4022 6.61333 6 7.25968 6 7.99996C6 9.10453 6.89543 9.99996 8 9.99996C8.74028 9.99996 9.38663 9.59776 9.73244 8.99996H11.874C11.4299 10.7252 9.86384 12 8 12C5.79086 12 4 10.2091 4 7.99996Z" fill="#004666"></path>
      <path d="M14 2L13 0L10 3V4.58579L7.79289 6.79289L9.20711 8.20711L11.4142 6H13L16 3L14 2Z" fill="#004666"></path>
    </svg>
  );
}

function VisionIcon({ className = "" }) {
  return (
    <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="32" rx="28" ry="18" fill="#0A3753"/>
      <ellipse cx="32" cy="32" rx="10" ry="10" fill="#fff"/>
      <circle cx="32" cy="32" r="5" fill="#0A3753"/>
    </svg>
  );
}

export default function IdentitySection() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">Nuestra Identidad</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center w-full max-w-7xl">
        {/* Misión */}
        <div className="flex-1 bg-[#D9D9D9] rounded-lg shadow-md border-t-8 border-[#223C51] px-10 py-8 flex flex-col justify-between min-w-[400px] max-w-[700px] h-[340px]">
          <div className="flex items-center mb-4">
            <MissionIcon className="mr-4" />
            <span className="text-4xl font-bold text-[#0A233F] font-geologica">Misión</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-base font-semibold text-black mb-6">
              Representar y defender los derechos e intereses de los estudiantes de la PUCE Esmeraldas, promoviendo su participación activa en la vida universitaria, fomentando la formación integral, y contribuyendo al desarrollo académico, cultural y social de la comunidad universitaria.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Representación</span>
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Participación</span>
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Formación Integral</span>
          </div>
        </div>
        {/* Visión */}
        <div className="flex-1 bg-[#D9D9D9] rounded-lg shadow-md border-t-8 border-[#3B7C3C] px-10 py-8 flex flex-col justify-between min-w-[400px] max-w-[700px] h-[340px]">
          <div className="flex items-center mb-4">
            <VisionIcon className="mr-4" />
            <span className="text-4xl font-bold text-[#0A233F] font-geologica">Visión</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-base font-semibold text-black mb-6">
              Ser una organización estudiantil reconocida por su liderazgo, transparencia y compromiso, que impulsa la excelencia académica y la formación de profesionales íntegros, con responsabilidad social y ambiental, capaces de contribuir al desarrollo sostenible de la provincia de Esmeraldas y del país.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Liderazgo</span>
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Excelencia</span>
            <span className="bg-[#0A233F] text-white rounded-lg px-3 py-1 font-semibold text-sm">Desarrollo Sostenible</span>
          </div>
        </div>
      </div>
    </section>
  );
} 