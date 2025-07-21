import Button from "../ui/Button";
import { useNavigate } from "react-router";
import { LogoPlaceholder2 } from "../../assets";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="font-geologica bg-feuce-primary opacity-[0.96] text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            <span className="whitespace-normal xl:whitespace-nowrap">
              Federación de Estudiantes
            </span>{" "}
            Universitarios
          </h1>
          <p className="text-xl xl:text-2xl text-gray-200 font-normal">
            Representando y trabajando por los derechos e intereses de todos los
            estudiantes universitarios de la Universidad Esmeraldas.
          </p>
          <Button
            onClick={() => navigate("/eventos")}
            className="flex text-xl xl:text-2xl select-none justify-center bg-gray-300 items-center cursor-pointer text-feuce-primary hover:bg-gray-400 px-8 py-3 rounded-lg"
          >
            Ver Eventos
          </Button>
        </div>
        <div className="flex flex-col items-end justify-center">
          <img
            className="w-96 h-96 filter brightness-0 invert"
            src={LogoPlaceholder2}
            alt="FEUCE Logo"
          />
        </div>
      </div>
    </section>
  );
}
