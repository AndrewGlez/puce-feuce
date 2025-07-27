import { randomUUID } from "crypto";
import express from "express";
import multer from "multer";
import path from "path";
import EventosModel from "../models/Eventos";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, path.resolve(__dirname, "../files/uploads/"));
  },
  filename: function (req, file, cb) {
    const randomName =
      Date.now() + "-" + randomUUID() + path.extname(file.originalname);
    cb(null, randomName);
  },
});

const fileFilter = (
  req: express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage: storage, fileFilter });

router.use(
  "/uploads",
  express.static(path.resolve(__dirname, "../files/uploads"))
);
router.post(
  "/:eventId/upload",
  upload.single("file"),
  async (req_: express.Request, res: express.Response): Promise<void> => {
    const { eventId } = req_.params;

    if (!req_.file) {
      res.status(400).send({ message: "No se subió ningún archivo." });
      return;
    }

    if (!eventId) {
      res.status(400).send({ message: "Se requiere el ID del evento." });
      return;
    }

    try {
      const updatedEvent = await EventosModel.findByIdAndUpdate(
        eventId,
        { $set: { imagen: `/uploads/${req_.file.filename}` } },
        { new: true, runValidators: true }
      );

      if (!updatedEvent) {
        res.status(404).send({ message: "Evento no encontrado." });
        return;
      }

      res.json({
        message: "Archivo subido y asociado con el evento exitosamente.",
        fileUrl: `/uploads/${req_.file.filename}`,
        event: updatedEvent,
      });
    } catch (error) {
      console.error("Error updating event with file path:", error);
      res.status(500).send({ message: "Error interno del servidor." });
    }
  }
);

export default router;
