import FileIcon from "../../assets/FileIcon";
import DownloadIcon from "../../assets/DownloadIcon";
import { useDocumentos } from "../../hooks/useDocumentos";
import { LoadingSpinner } from "../ui";

export default function DocumentosPage() {
  const { data: documentos = [], error, isLoading } = useDocumentos();

  // Función para obtener el color según la categoría
  const getColorForCategory = (categoria: string) => {
    switch (categoria) {
      case "Reglamento":
        return "#16324A";
      case "Instructivo":
        return "#3B7C3C";
      case "Manual":
        return "#B85C1C";
      default:
        return "#666666";
    }
  };

  // Función para formatear la fecha
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Agrupar documentos por categoría
  const documentosPorCategoria = documentos.reduce((acc, doc) => {
    if (!acc[doc.categoria]) {
      acc[doc.categoria] = [];
    }
    acc[doc.categoria].push(doc);
    return acc;
  }, {} as Record<string, typeof documentos>);

  if (isLoading) {
    return (
      <section className="w-full font-geologica flex flex-col items-center py-10 bg-white">
        <div className="flex items-center justify-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full font-geologica flex flex-col items-center py-10 bg-white">
        <div className="text-center text-red-600">
          Error al cargar los documentos
        </div>
      </section>
    );
  }

  return (
    <section className="w-full font-geologica flex flex-col items-center py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-normal text-center mb-12 text-feuce-primary">
        Documentos Importantes
      </h2>
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {Object.entries(documentosPorCategoria).map(([categoria, docs]) => (
          <div key={categoria} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-normal mb-6 text-feuce-primary">
              {categoria}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {docs.map((doc) => (
                <div
                  key={doc._id}
                  className="flex items-center bg-white border border-neutral-300 rounded-lg p-4 gap-4"
                >
                  <div>
                    <FileIcon color={getColorForCategory(doc.categoria)} size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="font-normal text-feuce-primary">
                      {doc.nombre}
                    </div>
                    {doc.disponible ? (
                      <div className="text-[#444] text-sm">
                        PDF | Actualizado: {formatDate(doc.fecha)}
                      </div>
                    ) : (
                      <div className="text-[#888] text-sm italic">
                        Próximamente disponible
                      </div>
                    )}
                  </div>
                  {doc.disponible && doc.archivo ? (
                    <a
                      href={`http://localhost:3000${doc.archivo}`}
                      download
                      className="ml-2 hover:opacity-80 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
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
