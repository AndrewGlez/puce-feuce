import express from "express";
import { QrCodesService } from "../service/QrCodesService";

const router = express.Router();
const qrCodesService = new QrCodesService();

// GET /qrcodes - Obtener todos los códigos QR
router.get("/", qrCodesService.getAllQrCodes.bind(qrCodesService));

// GET /qrcodes/:id - Obtener código QR por ID
router.get("/:id", qrCodesService.getQrCodeById.bind(qrCodesService));

// POST /qrcodes - Crear nuevo código QR
router.post("/", qrCodesService.createQrCode.bind(qrCodesService));

// PUT /qrcodes/:id - Actualizar código QR
router.put("/:id", qrCodesService.updateQrCode.bind(qrCodesService));

// DELETE /qrcodes/:id - Eliminar código QR
router.delete("/:id", qrCodesService.deleteQrCode.bind(qrCodesService));

// PATCH /qrcodes/:id/toggle - Cambiar estado activo/inactivo
router.patch(
  "/:id/toggle",
  qrCodesService.toggleQrCodeStatus.bind(qrCodesService)
);

export default router;
