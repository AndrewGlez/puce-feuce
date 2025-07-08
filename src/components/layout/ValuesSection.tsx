import EquityIcon from "../../assets/equity-icon";
import InnovationIcon from "../../assets/innovation-icon";
import IntegrityIcon from "../../assets/integrity-icon";
import SolidarityIcon from "../../assets/solidarity-icon";

export default function ValuesSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white py-12">
      <h2 className="text-5xl font-normal text-center text-feuce-primary font-geologica mb-10">
        Nuestros Valores
      </h2>
      <div className="flex w-full max-w-6xl flex-col md:flex-row justify-center items-center gap-8 md:gap-6 px-4">
        <div className="flex flex-col items-center flex-1">
          <SolidarityIcon />
          <span className="mt-4 text-2xl font-normal text-black font-geologica">
            Solidaridad
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <IntegrityIcon />
          <span className="mt-4 text-2xl font-normal text-black font-geologica">
            Integridad
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <InnovationIcon />
          <span className="mt-4 text-2xl font-normal text-black font-geologica">
            Innovación
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <EquityIcon />
          <span className="mt-4 text-2xl font-normal text-black font-geologica">
            Equidad
          </span>
        </div>
      </div>
    </section>
  );
}
