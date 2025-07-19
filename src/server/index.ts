import express, { type ErrorRequestHandler, urlencoded, json } from "express";
import { ValidateError } from "tsoa";
import * as swaggerDocument from "./build/swagger.json";
import { RegisterRoutes } from "./build/routes";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/database";
import morgan from "morgan";
import cors from "cors";
import { MongooseError } from "mongoose";
import FilesService from "./service/FilesService";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));
app.use(cors());

// Conectar con MongoDB
connectDB();

// Registrar las rutas generadas por tsoa
RegisterRoutes(app);

// Registrar las rutas estáticas para servir archivos
app.use(FilesService);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    res.status(422).json({
      message: "Falló la validación de los datos.",
      details: err?.fields,
    });
    return;
  }
  if (err instanceof MongooseError) {
    res.status(400).json({
      message: err.message,
    });
    return;
  }
  if (err instanceof Error) {
    console.error(`Error en la ruta ${req.path}:`, err.message);
    res.status(500).json({
      message: "Error interno del servidor.",
    });
    return;
  }

  next();
};

app.use(errorHandler);

app.use("/docs/feuce", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.info("🚀 Server is running on http://localhost:3000");
  console.info(
    "📖 API documentation is available at http://localhost:3000/docs/feuce"
  );
});
