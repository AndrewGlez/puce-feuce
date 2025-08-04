import { Request, Response } from "express";
import QrCodeModel from "../models/QrCode";

export class QrCodesService {
  public async getAllQrCodes(req: Request, res: Response): Promise<void> {
    try {
      const qrCodes = await QrCodeModel.find().sort({ fechaCreacion: -1 });
      res.json(qrCodes);
    } catch (error) {
      console.error("Error fetching QR codes:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  public async getQrCodeById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const qrCode = await QrCodeModel.findById(id);

      if (!qrCode) {
        res.status(404).json({ message: "Código QR no encontrado" });
        return;
      }

      res.json(qrCode);
    } catch (error) {
      console.error("Error fetching QR code:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  public async createQrCode(req: Request, res: Response): Promise<void> {
    try {
      // Check if a QR code already exists
      const existingQrCode = await QrCodeModel.findOne();
      if (existingQrCode) {
        res
          .status(400)
          .json({
            message: "Solo puede existir un código QR. Edite el existente.",
          });
        return;
      }

      const { nombre, descripcion } = req.body;

      const newQrCode = new QrCodeModel({
        nombre,
        descripcion,
        imagen: "", // Will be updated when image is uploaded
        activo: true,
      });

      const savedQrCode = await newQrCode.save();
      res.status(201).json(savedQrCode);
    } catch (error) {
      console.error("Error creating QR code:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  public async updateQrCode(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedQrCode = await QrCodeModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedQrCode) {
        res.status(404).json({ message: "Código QR no encontrado" });
        return;
      }

      res.json(updatedQrCode);
    } catch (error) {
      console.error("Error updating QR code:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  public async deleteQrCode(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedQrCode = await QrCodeModel.findByIdAndDelete(id);

      if (!deletedQrCode) {
        res.status(404).json({ message: "Código QR no encontrado" });
        return;
      }

      res.json({ message: "Código QR eliminado exitosamente" });
    } catch (error) {
      console.error("Error deleting QR code:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  public async toggleQrCodeStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const qrCode = await QrCodeModel.findById(id);

      if (!qrCode) {
        res.status(404).json({ message: "Código QR no encontrado" });
        return;
      }

      qrCode.activo = !qrCode.activo;
      const updatedQrCode = await qrCode.save();

      res.json(updatedQrCode);
    } catch (error) {
      console.error("Error toggling QR code status:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}
