import { randomUUID } from "crypto";
import express from "express";
import multer from "multer";
import path from "path";
import EventosModel from "../models/Eventos";
import DocumentoModel from "../models/Documentos";
import MiembroModel from "../models/Miembro";
import QrCodeModel from "../models/QrCode";

const router = express.Router();

import fs from "fs";

// Asegurar que los directorios existan
const uploadsDir = path.resolve(__dirname, "../files/uploads/");
const docsDir = path.resolve(__dirname, "../files/docs/");
const membersDir = path.resolve(__dirname, "../files/members/");
const qrCodesDir = path.resolve(__dirname, "../files/qrcodes/");

// Crear directorios si no existen
[uploadsDir, docsDir, membersDir, qrCodesDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

const storage = multer.diskStorage({
  destination: function (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, uploadsDir);
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

router.use("/uploads", express.static(uploadsDir));
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
      console.error("Error details:", {
        eventId,
        filename: req_.file?.filename,
        error: error instanceof Error ? error.message : error,
      });
      res.status(500).send({
        message: "Error interno del servidor.",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

// Rutas para documentos
const storageDocs = multer.diskStorage({
  destination: function (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, docsDir);
  },
  filename: function (req, file, cb) {
    const randomName =
      Date.now() + "-" + randomUUID() + path.extname(file.originalname);
    cb(null, randomName);
  },
});
const uploadDoc = multer({ storage: storageDocs });

router.use("/docs", express.static(docsDir));
router.post(
  "/docs/:docId/upload",
  uploadDoc.single("file"),
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { docId } = req.params;
    if (!req.file) {
      res.status(400).send({ message: "No se subió ningún archivo." });
      return;
    }
    if (!docId) {
      res.status(400).send({ message: "Se requiere el ID del documento." });
      return;
    }
    try {
      const updatedDoc = await DocumentoModel.findByIdAndUpdate(
        docId,
        { $set: { archivo: `/docs/${req.file.filename}` } },
        { new: true, runValidators: true }
      );
      if (!updatedDoc) {
        res.status(404).send({ message: "Documento no encontrado." });
        return;
      }
      res.json({
        message: "Archivo subido y asociado con el documento exitosamente.",
        fileUrl: `/docs/${req.file.filename}`,
        document: updatedDoc,
      });
    } catch (error) {
      console.error("Error updating document with file path:", error);
      console.error("Error details:", {
        docId,
        filename: req.file?.filename,
        error: error instanceof Error ? error.message : error,
      });
      res.status(500).send({
        message: "Error interno del servidor.",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

// Rutas para miembros
const storageMembers = multer.diskStorage({
  destination: function (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, membersDir);
  },
  filename: function (req, file, cb) {
    const randomName =
      Date.now() + "-" + randomUUID() + path.extname(file.originalname);
    cb(null, randomName);
  },
});

const fileFilterMembers = (
  req: express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(null, false);
};

const uploadMember = multer({
  storage: storageMembers,
  fileFilter: fileFilterMembers,
});

router.use("/members", express.static(membersDir));
router.post(
  "/members/:memberId/upload",
  uploadMember.single("file"),
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { memberId } = req.params;
    if (!req.file) {
      res.status(400).send({ message: "No se subió ningún archivo." });
      return;
    }
    if (!memberId) {
      res.status(400).send({ message: "Se requiere el ID del miembro." });
      return;
    }
    try {
      const updatedMember = await MiembroModel.findByIdAndUpdate(
        memberId,
        { $set: { image: `/members/${req.file.filename}` } },
        { new: true, runValidators: true }
      );
      if (!updatedMember) {
        res.status(404).send({ message: "Miembro no encontrado." });
        return;
      }
      res.json({
        message: "Imagen subida y asociada con el miembro exitosamente.",
        fileUrl: `/members/${req.file.filename}`,
        member: updatedMember,
      });
    } catch (error) {
      console.error("Error updating member with image path:", error);
      res.status(500).send({ message: "Error interno del servidor." });
    }
  }
);

// Rutas para códigos QR
const storageQrCodes = multer.diskStorage({
  destination: function (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, qrCodesDir);
  },
  filename: function (req, file, cb) {
    const randomName =
      Date.now() + "-" + randomUUID() + path.extname(file.originalname);
    cb(null, randomName);
  },
});

const fileFilterQrCodes = (
  req: express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(null, false);
};

const uploadQrCode = multer({
  storage: storageQrCodes,
  fileFilter: fileFilterQrCodes,
});

router.use("/qrcodes", express.static(qrCodesDir));
router.post(
  "/qrcodes/:qrCodeId/upload",
  uploadQrCode.single("file"),
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { qrCodeId } = req.params;
    if (!req.file) {
      res.status(400).send({ message: "No se subió ningún archivo." });
      return;
    }
    if (!qrCodeId) {
      res.status(400).send({ message: "Se requiere el ID del código QR." });
      return;
    }
    try {
      const updatedQrCode = await QrCodeModel.findByIdAndUpdate(
        qrCodeId,
        { $set: { imagen: `/qrcodes/${req.file.filename}` } },
        { new: true, runValidators: true }
      );
      if (!updatedQrCode) {
        res.status(404).send({ message: "Código QR no encontrado." });
        return;
      }
      res.json({
        message: "Imagen de código QR subida exitosamente.",
        fileUrl: `/qrcodes/${req.file.filename}`,
        qrCode: updatedQrCode,
      });
    } catch (error) {
      console.error("Error updating QR code with image path:", error);
      res.status(500).send({ message: "Error interno del servidor." });
    }
  }
);

export default router;
