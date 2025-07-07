import EquityIcon from "../../assets/equity-icon";
import InnovationIcon from "../../assets/innovation-icon";
import IntegrityIcon from "../../assets/integrity-icon";
import SolidarityIcon from "../../assets/solidarity-icon";

export default function ValuesSection() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">
        Nuestros Valores
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center xl:gap-12 md:gap-0">
        <div className="flex flex-col items-center flex-1">
          <SolidarityIcon />
          <span className="mt-4 text-2xl font-bold text-black font-geologica">
            Solidaridad
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <IntegrityIcon />
          <span className="mt-4 text-2xl font-bold text-black font-geologica">
            Integridad
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <InnovationIcon />
          <span className="mt-4 text-2xl font-bold text-black font-geologica">
            Innovación
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <EquityIcon />
          <span className="mt-4 text-2xl font-bold text-black font-geologica">
            Equidad
          </span>
        </div>
      </div>
    </section>
  );
}
