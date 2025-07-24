import { LogoPlaceholder2 } from "../../../assets";
import { motion, LayoutGroup } from "framer-motion";
import {
  IconCalendar,
  IconFileText,
  IconUsers,
  IconQrcode,
  IconLogout,
} from "@tabler/icons-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminSidebar({
  activeTab,
  setActiveTab,
}: AdminSidebarProps) {
  return (
    <div className="w-80 bg-feuce-primary text-white flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-gray-700">
        <div className="flex items-center">
          <img
            className="w-12 h-12 mr-4 filter brightness-0 invert"
            src={LogoPlaceholder2}
            alt="FEUCE Logo"
          />
          <div>
            <div className="font-bold text-xl">Feuce</div>
            <div className="text-sm text-gray-300 font-medium">ESMERALDAS</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <LayoutGroup>
          <ul className="space-y-3 relative">
            {/* Eventos Tab */}
            <li className="relative">
              {activeTab === "eventos" && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-xl shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <button
                onClick={() => setActiveTab("eventos")}
                className={`cursor-pointer relative z-10 w-full flex items-center px-6 py-4 rounded-xl transition-colors duration-200 ${
                  activeTab === "eventos"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <IconCalendar className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Eventos</span>
              </button>
            </li>

            {/* Documentos Tab */}
            <li className="relative">
              {activeTab === "documentos" && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-xl shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <button
                onClick={() => setActiveTab("documentos")}
                className={`cursor-pointer relative z-10 w-full flex items-center px-6 py-4 rounded-xl transition-colors duration-200 ${
                  activeTab === "documentos"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <IconFileText className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Documentos</span>
              </button>
            </li>

            {/* Miembros Tab */}
            <li className="relative">
              {activeTab === "miembros" && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-xl shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <button
                onClick={() => setActiveTab("miembros")}
                className={`cursor-pointer relative z-10 w-full flex items-center px-6 py-4 rounded-xl transition-colors duration-200 ${
                  activeTab === "miembros"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <IconUsers className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Miembros</span>
              </button>
            </li>

            {/* Códigos QR Tab */}
            <li className="relative">
              {activeTab === "codigos" && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-xl shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <button
                onClick={() => setActiveTab("codigos")}
                className={`cursor-pointer relative z-10 w-full flex items-center px-6 py-4 rounded-xl transition-colors duration-200 ${
                  activeTab === "codigos"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <IconQrcode className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">Códigos QR</span>
              </button>
            </li>
          </ul>
        </LayoutGroup>
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-700">
        <button className="w-full flex items-center justify-center px-6 py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-lg">
          <IconLogout className="w-6 h-6 mr-3" />
          <span className="font-medium text-lg">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}
