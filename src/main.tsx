import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MainRouter from "./components/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </StrictMode>
);
