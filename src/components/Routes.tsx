import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />

        {/* TODO: Definir las rutas anidadas para cada sección */}
        <Route path="miembros" element={<div>Miembros Page</div>} />
        <Route path="eventos" element={<div>Eventos Page</div>} />
        <Route path="documentos" element={<div>Documentos Page</div>} />
        <Route path="reclamos" element={<div>Reclamos Page</div>} />
        <Route path="impresiones" element={<div>Impresiones Page</div>} />

        {/* Ruta para manejar 404 Not Found */}
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
