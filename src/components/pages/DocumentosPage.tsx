import FileIcon from "../../assets/FileIcon";
import DownloadIcon from "../../assets/DownloadIcon";

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
        link: `/src/assets/REGLAMENTO DE-LA-PONTIFICIA-UNIVERSIDAD-CATOLICA-2018.pdf`,
        disponible: true,
      },
      {
        nombre: "Estatutos FEUCE",
        archivo: null,
        peso: null,
        fecha: "7 de Julio 2025",
        color: "#16324A",
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
        link: `/src/assets/INSTRUCTIVO_DE_REGIMEN_ECONOMICO_Y_BECAS.pdf`,
        disponible: true,
      },
      {
        nombre: "Guía para Trámites Académicos",
        archivo: "Manual-acceso-Solicitud-Tramites-PUCE.pdf",
        peso: "1.0 MB",
        fecha: "7 de Julio 2025",
        color: "#3B7C3C",
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
        link: `/src/assets/codigo-de-etica-y-convivencia_20250202.pdf`,
        disponible: true,
      },
      {
        nombre: "Reglamento General de Personal Academico",
        archivo: "Reglamento_General_de_Personal_Acad_actualizado.pdf",
        peso: "11 MB",
        fecha: "7 de Julio 2025",
        color: "#B85C1C",
        link: `/src/assets/Reglamento_General_de_Personal_Acad_actualizado.pdf`,
        disponible: true,
      },
    ],
  },
];

export default function DocumentosPage() {
  return (
    <section className="w-full font-geologica flex flex-col items-center py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-normal text-center mb-12 text-feuce-primary">
        Documentos Importantes
      </h2>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {documentos.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-normal mb-6 text-feuce-primary">
              {cat.categoria}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {cat.items.map((doc, j) => (
                <div
                  key={j}
                  className="flex items-center bg-white border border-neutral-300 rounded-lg p-4 gap-4"
                >
                  <div>
                    <FileIcon color={doc.color} size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="font-normal text-feuce-primary">
                      {doc.nombre}
                    </div>
                    {doc.disponible ? (
                      <div className="text-[#444] text-sm">
                        PDF | {doc.peso} | Actualizado: {doc.fecha}
                      </div>
                    ) : (
                      <div className="text-[#888] text-sm italic">
                        Próximamente disponible
                      </div>
                    )}
                  </div>
                  {doc.disponible ? (
                    <a
                      href={doc.link || undefined}
                      download
                      className="ml-2 hover:opacity-80 transition-all"
                    >
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
