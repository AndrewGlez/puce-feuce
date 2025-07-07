import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Miembros", path: "/miembros" },
    { name: "Eventos", path: "/eventos" },
    { name: "Documentos", path: "/documentos" },
    { name: "Reclamos", path: "/reclamos" },
    { name: "Impresiones", path: "/impresiones" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between h-full px-6">
      {/* navegación de escritorio */}
      <div className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className="text-sm cursor-pointer transition-colors hover:text-slate-400"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Botón Hamburguesa */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-slate-700 transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <IconMenu className="w-6 h-6 text-white" aria-label="Cerrar menú" />
        ) : (
          <IconMenu className="w-6 h-6 text-white" aria-label="Abrir menú" />
        )}
      </button>

      {/* Navegación Móvil con animaciones */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black md:hidden z-40"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 right-0 bottom-0 left-16 bg-feuce-primary md:hidden z-50"
            >
              <div className="flex flex-col h-full pt-16">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.3,
                    }}
                    className="hover:bg-feuce-hover px-6 py-4 text-lg text-white transition-colors border-b"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate(link.path);
                    }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
