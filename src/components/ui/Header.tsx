import { Link } from "react-router";
import { LogoPlaceholder } from "../../assets";
import Navbar from "./Navbar";

export default function Header({ style }: { style?: string }) {
  return (
    <header className={`${style}`}>
      <div className="flex text-white font-geologica justify-between items-center w-full h-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 relative">
        <Link to="/" replace>
          <div className="flex justify-center items-center space-x-1 sm:space-x-2">
            <img
              className="h-8 sm:h-9 md:h-10 mb-1"
              src={LogoPlaceholder}
              alt="Logo"
            />

            <div className="text-sm sm:text-base md:text-lg font-medium truncate">
              <span className="sm:inline">PUCE Esmeraldas</span>
            </div>
          </div>
        </Link>

        <div className="">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
