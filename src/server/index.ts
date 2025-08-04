import express, { type ErrorRequestHandler, urlencoded, json } from "express";
import dotenv from "dotenv";
import { ValidateError } from "tsoa";
import * as swaggerDocument from "./build/swagger.json";
import { RegisterRoutes } from "./build/routes";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/database";
import { AuthService } from "./service/AuthService";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import cors from "cors";
import { MongooseError } from "mongoose";
import FilesService from "./service/FilesService";
import QrCodesController from "./controllers/QrCodesController";
import { UsuariosService } from "./service/UsuarioService";

// Load environment variables
dotenv.config();
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));
app.use(cors());

// Conectar con MongoDB
connectDB();

// Registrar las rutas generadas por tsoa
RegisterRoutes(app);

// Ruta de login
app.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const user = await new AuthService().login({ correo, contraseña });
    const secret = process.env.JWT_SECRET;
    const userId = new UsuariosService().getUserIdByEmail(correo);
    if (!secret) {
      throw new Error("JWT_SECRET no configurado");
    }
    const token = jwt.sign({ id: userId, correo: user.correo }, secret, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Credenciales inválidas" });
    console.error("Error de autenticación:", error);
  }
});

// Registrar las rutas estáticas para servir archivos
app.use(FilesService);

// Registrar las rutas de códigos QR
app.use("/qrcodes", QrCodesController);

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
