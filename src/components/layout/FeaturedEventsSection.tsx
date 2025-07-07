import React from "react";
import asambleaImg from "../../assets/Asamble de estudiantes.jpeg";
import liderazgoImg from "../../assets/Taller de Liderazgo Estudiantil.jpg";
import festivalImg from "../../assets/Festival Cultural Universitario.jpg";
import { Link } from "react-router-dom";

const events = [
  {
    image: asambleaImg,
    label: "Próximamente",
    labelColor: "bg-[#16324A] text-white",
    title: "Asamblea General Estudiantil",
    date: "15 de Julio, 2025 | 10:00 AM",
    description: "Reunión semestral para discutir temas importantes para la comunidad estudiantil.",
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
    description: "Desarrolla habilidades de liderazgo para tu vida académica y profesional.",
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
    description: "Celebra la diversidad cultural con música, danza, arte y gastronomía.",
    link: "#",
    linkText: "Más Información",
    linkColor: "text-[#5B4B7E]",
  },
];

export default function FeaturedEventsSection() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white mt-20">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">Eventos Destacados</h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-[90vw]">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden min-w-[480px] max-w-[600px] flex-1 shadow-[0_8px_24px_0_rgba(44,62,80,0.10),0_16px_40px_0_rgba(44,62,80,0.13)]">
            <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
            <div className="flex flex-col flex-1 p-6">
              <span className={`inline-flex w-auto px-3 py-2 rounded-lg font-semibold text-base mb-3 justify-center items-center ${event.labelColor}`}>{event.label}</span>
              <h3 className="text-2xl font-bold mb-2 text-[#0A233F] font-geologica">{event.title}</h3>
              <div className="text-[#5B5B5B] font-semibold mb-2">{event.date}</div>
              <div className="text-[#444] mb-4 flex-1">{event.description}</div>
              <a href={event.link} className={`font-semibold underline underline-offset-2 ${event.linkColor} hover:opacity-80 transition-all flex items-center gap-1`}>
                {event.linkText} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link to="/eventos">
        <button className="mt-12 px-10 py-3 bg-[#0A233F] text-white rounded-xl font-bold text-xl shadow-md hover:bg-[#16324A] transition-all">
          Ver todos los eventos
        </button>
      </Link>
    </section>
  );
} 