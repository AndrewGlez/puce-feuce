import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import MiembrosPage from "./pages/MiembrosPage";
import EventosPage from "./pages/EventosPage";
import DocumentosPage from "./pages/DocumentosPage";
import ReclamosPage from "./pages/ReclamosPage";
import ImpresionesPage from "./pages/ImpresionesPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="miembros" element={<MiembrosPage />} />
        <Route path="eventos" element={<EventosPage />} />
        <Route path="documentos" element={<DocumentosPage />} />
        <Route path="reclamos" element={<ReclamosPage />} />
        <Route path="impresiones" element={<ImpresionesPage />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-bold">404 - Página no encontrada</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default MainRouter;
