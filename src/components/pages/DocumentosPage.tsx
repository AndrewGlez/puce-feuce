import React from "react";

const documentos = [
  {
    categoria: "Reglamentos",
    items: [
      {
        nombre: "Reglamento General de Estudiantes",
        archivo: "REGLAMENTO DE-LA-PONTIFICIA-UNIVERSIDAD-CATOLICA-2018.pdf",
        peso: "240 KB",
        fecha: "7 de Julio 2025",
        color: "#16324A",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#16324A"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: `/src/assets/REGLAMENTO DE-LA-PONTIFICIA-UNIVERSIDAD-CATOLICA-2018.pdf`,
        disponible: true,
      },
      {
        nombre: "Estatutos FEUCE",
        archivo: null,
        peso: null,
        fecha: "7 de Julio 2025",
        color: "#16324A",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#16324A"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: null,
        disponible: false,
      },
    ],
  },
  {
    categoria: "Instructivos",
    items: [
      {
        nombre: "Instructivo de Becas y Ayudas Económicas",
        archivo: "INSTRUCTIVO_DE_REGIMEN_ECONOMICO_Y_BECAS.pdf",
        peso: "218 KB",
        fecha: "7 de Julio 2025",
        color: "#3B7C3C",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#3B7C3C"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: `/src/assets/INSTRUCTIVO_DE_REGIMEN_ECONOMICO_Y_BECAS.pdf`,
        disponible: true,
      },
      {
        nombre: "Guía para Trámites Académicos",
        archivo: "Manual-acceso-Solicitud-Tramites-PUCE.pdf",
        peso: "1.0 MB",
        fecha: "7 de Julio 2025",
        color: "#3B7C3C",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#3B7C3C"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: `/src/assets/Manual-acceso-Solicitud-Tramites-PUCE.pdf`,
        disponible: true,
      },
    ],
  },
  {
    categoria: "Normativas Universitarias",
    items: [
      {
        nombre: "Código de Ética Universitaria",
        archivo: "codigo-de-etica-y-convivencia_20250202.pdf",
        peso: "2.9 MB",
        fecha: "7 de Julio 2025",
        color: "#B85C1C",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#B85C1C"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: `/src/assets/codigo-de-etica-y-convivencia_20250202.pdf`,
        disponible: true,
      },
      {
        nombre: "Reglamento General de Personal Academico",
        archivo: "Reglamento_General_de_Personal_Acad_actualizado.pdf",
        peso: "11 MB",
        fecha: "7 de Julio 2025",
        color: "#B85C1C",
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#B85C1C"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        ),
        link: `/src/assets/Reglamento_General_de_Personal_Acad_actualizado.pdf`,
        disponible: true,
      },
    ],
  },
];

function DownloadIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#16324A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="18" width="16" height="2" rx="1" fill="#16324A"/></svg>
  );
}

export default function DocumentosPage() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">Documentos Importantes</h2>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {documentos.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold mb-6 text-[#0A233F]">{cat.categoria}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {cat.items.map((doc, j) => (
                <div key={j} className="flex items-center bg-white border rounded-lg p-4 gap-4">
                  <div>{doc.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-[#0A233F]">{doc.nombre}</div>
                    {doc.disponible ? (
                      <div className="text-[#444] text-sm">PDF | {doc.peso} | Actualizado: {doc.fecha}</div>
                    ) : (
                      <div className="text-[#888] text-sm italic">Próximamente disponible</div>
                    )}
                  </div>
                  {doc.disponible ? (
                    <a href={doc.link || undefined} download className="ml-2 hover:opacity-80 transition-all">
                      <DownloadIcon />
                    </a>
                  ) : (
                    <span className="ml-2 opacity-40 cursor-not-allowed">
                      <DownloadIcon />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
