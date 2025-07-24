import { IconMoodSad } from "@tabler/icons-react";
import { useEventos } from "../../../hooks/useEventos";
import EventsSkeleton from "../../ui/EventsSkeleton";

export default function AllEventsSection() {
  const { data, isLoading } = useEventos();

  if (isLoading) {
    return <EventsSkeleton />;
  }
  if (!data || data.length === 0) {
    return (
      <section className="w-auto flex flex-col items-center bg-white py-16">
        <h2 className="text-5xl font-normal text-center mb-12 text-feuce-primary font-geologica">
          Eventos
        </h2>
        <div className="flex flex-col space-y-12 items-center my-[10rem]">
          <IconMoodSad className="text-feuce-primary opacity-40 w-[10rem] h-[10rem]" />
          <p className="text-2xl text-feuce-primary font-light opacity-60 font-geologica">
            No hay eventos disponibles.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="w-auto flex flex-col items-center bg-white py-16">
      <h2 className="text-5xl font-normal text-center mb-12 text-feuce-primary font-geologica">
        Eventos
      </h2>
      <div className="w-auto flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-[90vw]">
        {data?.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col w-md bg-white rounded-2xl overflow-hidden flex-1 shadow-[0_8px_24px_0_rgba(44,62,80,0.10),0_16px_40px_0_rgba(44,62,80,0.13)]"
          >
            <img
              src={event.imagen}
              alt={event.titulo}
              className="h-56 object-cover"
            />
            <div className="flex flex-col flex-1 p-6">
              <div
                className={`inline-block px-3 py-1 ${
                  event.estado === "Próximamente"
                    ? "bg-[#16324A] text-white"
                    : event.estado === "Inscripciones Abiertas"
                    ? "bg-[#3B7C3C] text-white"
                    : "bg-[#5B4B7E] text-white"
                } rounded-lg font-geologica font-light  mb-3 items-center w-fit`}
              >
                <span>{event.estado}</span>
              </div>
              <h3 className="text-2xl font-normal mb-2 text-black font-geologica">
                {event.titulo}
              </h3>
              <div className="text-[#5B5B5B] font-geologica font-semibold mb-2">
                {new Date(event.fecha_inicio).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="text-[#444] font-geologica mb-4 flex-1">
                {event.descripcion}
              </div>
              <a
                href={event.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold font-geologica underline underline-offset-2 hover:opacity-80 transition-all flex items-center gap-1`}
              >
                {event.etiquetaEnlace} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
