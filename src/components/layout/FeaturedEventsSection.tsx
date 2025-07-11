import { useNavigate } from "react-router";
import { asambleaImg, festivalImg, liderazgoImg } from "../../assets";

const events = [
  {
    image: asambleaImg,
    label: "Próximamente",
    labelColor: "bg-[#16324A] text-white",
    title: "Asamblea General Estudiantil",
    date: "15 de Julio, 2025 | 10:00 AM",
    description:
      "Reunión semestral para discutir temas importantes para la comunidad estudiantil.",
    link: "#",
    linkText: "Más información",
    linkColor: "text-[#16324A]",
  },
  {
    image: liderazgoImg,
    label: "Inscripciones Abiertas",
    labelColor: "bg-[#3B7C3C] text-white",
    title: "Taller de Liderazgo Estudiantil",
    date: "20-22 de Julio, 2025 | 14:00 PM",
    description:
      "Desarrolla habilidades de liderazgo para tu vida académica y profesional.",
    link: "#",
    linkText: "Inscríbete aquí",
    linkColor: "text-[#3B7C3C]",
  },
  {
    image: festivalImg,
    label: "Próximamente",
    labelColor: "bg-[#5B4B7E] text-white",
    title: "Festival Cultural Universitario",
    date: "12 de Agosto, 2025 | Todo el día",
    description:
      "Celebra la diversidad cultural con música, danza, arte y gastronomía.",
    link: "#",
    linkText: "Más Información",
    linkColor: "text-[#5B4B7E]",
  },
];

interface FeaturedEventsSectionProps {
  maxEvents?: number;
}

export default function FeaturedEventsSection({
  maxEvents = 3,
}: FeaturedEventsSectionProps) {
  const navigate = useNavigate();
  const displayedEvents = events.slice(0, maxEvents);

  return (
    <section className="w-auto flex flex-col items-center bg-white py-16">
      <h2 className="text-5xl font-normal text-center mb-12 text-feuce-primary font-geologica">
        Eventos Destacados
      </h2>
      <div className="w-auto flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-[90vw]">
        {displayedEvents.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-2xl overflow-hidden flex-1 shadow-[0_8px_24px_0_rgba(44,62,80,0.10),0_16px_40px_0_rgba(44,62,80,0.13)]"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-56 object-cover"
            />
            <div className="flex flex-col flex-1 p-6">
              <div
                className={`inline-block px-3 py-1 rounded-lg font-geologica font-light mb-3 items-center w-fit ${event.labelColor}`}
              >
                <span>{event.label}</span>
              </div>
              <h3 className="text-2xl font-normal mb-2 text-black font-geologica">
                {event.title}
              </h3>
              <div className="text-[#5B5B5B] font-geologica font-semibold mb-2">
                {event.date}
              </div>
              <div className="text-[#444] font-geologica mb-4 flex-1">
                {event.description}
              </div>
              <a
                href={event.link}
                className={`font-semibold font-geologica underline underline-offset-2 ${event.linkColor} hover:opacity-80 transition-all flex items-center gap-1`}
              >
                {event.linkText} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/eventos")}
        className="mt-12 px-10 py-3 bg-feuce-primary font-geologica text-white rounded-xl font-normal text-xl shadow-md hover:bg-[#16324A] transition-all"
      >
        Ver todos los eventos
      </button>
    </section>
  );
}
