import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MainRouter from "./components/Routes";
import Provider from "./components/Provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <MainRouter />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
