import express, { type ErrorRequestHandler, urlencoded, json } from "express";
import { ValidateError } from "tsoa";
import * as swaggerDocument from "./build/swagger.json";
import { RegisterRoutes } from "./build/routes";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/database";
import morgan from "morgan";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));

// Conectar con MongoDB
connectDB();

RegisterRoutes(app);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
    return;
  }
  if (err instanceof Error) {
    res.status(500).json({
      message: err.message,
    });
    return;
  }

  next();
};

app.use(errorHandler);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.info("Server is running on http://localhost:3000");
});
