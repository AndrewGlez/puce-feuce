import { IconTargetArrow } from "@tabler/icons-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="font-geologica bg-feuce-primary opacity-[0.96] text-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="md:text-4xl text-5xl font-normal">
            Federación de Estudiantes Universitarios
          </h1>
          <p className="text-lg text-gray-300 font-normal">
            Representando y trabajando por los derechos e intereses de todos los
            estudiantes universitarios de la Universidad Esmeraldas.
          </p>
          <Link to="/eventos">
            <Button className="flex select-none justify-center bg-white items-center cursor-pointer text-feuce-primary hover:bg-gray-300">
              Ver Eventos
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <IconTargetArrow className="w-16 h-16 text-navy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
