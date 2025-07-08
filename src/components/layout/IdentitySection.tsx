import MissionIcon from "../../assets/mission-icon";
import VisionIcon from "../../assets/vision-icon";

export default function IdentitySection() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-5xl font-normal text-center mb-12 text-feuce-primary font-geologica">
        Nuestra Identidad
      </h2>
      <div className="flex xl:px-12 2xl:p-0 flex-col md:flex-row gap-10 justify-center w-full max-w-7xl">
        {/* Misión */}
        <div className="flex-1 bg-feuce-gray rounded-lg shadow-md border-t-8 border-[#223C51] px-10 py-8 flex flex-col justify-between min-w-[400px] max-w-[700px] h-[340px]">
          <div className="flex items-center mb-4">
            <MissionIcon className="mr-4" />
            <span className="text-4xl font-normal text-feuce-primary font-geologica">
              Misión
            </span>
          </div>
          <div className="flex-1 flex flex-col text-justify justify-center">
            <p className="text-base font-normal font-geologica text-black mb-6">
              Representar y defender los derechos e intereses de los estudiantes
              de la PUCE Esmeraldas, promoviendo su participación activa en la
              vida universitaria, fomentando la formación integral, y
              contribuyendo al desarrollo académico, cultural y social de la
              comunidad universitaria.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Representación
            </span>
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Participación
            </span>
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Formación Integral
            </span>
          </div>
        </div>
        {/* Visión */}
        <div className="flex-1 bg-feuce-gray rounded-lg shadow-md border-t-8 border-[#3B7C3C] px-10 py-8 flex flex-col justify-between min-w-[400px] max-w-[700px] h-[340px]">
          <div className="flex items-center mb-4">
            <VisionIcon className="mr-4" />
            <span className="text-4xl font-normal text-feuce-primary rounded-lg px-3 py-1 font-geologica">
              Visión
            </span>
          </div>
          <div className="flex-1 flex flex-col text-justify justify-center">
            <p className="text-base font-normal font-geologica text-black mb-6">
              Ser una organización estudiantil reconocida por su liderazgo,
              transparencia y compromiso, que impulsa la excelencia académica y
              la formación de profesionales íntegros, con responsabilidad social
              y ambiental, capaces de contribuir al desarrollo sostenible de la
              provincia de Esmeraldas y del país.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Liderazgo
            </span>
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Excelencia
            </span>
            <span className="bg-feuce-primary text-white rounded-lg px-3 py-1 font-light font-geologica text-sm">
              Desarrollo Sostenible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
