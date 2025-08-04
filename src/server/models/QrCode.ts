import mongoose, { Schema, Document } from "mongoose";

export interface IQrCode extends Document {
  nombre: string;
  descripcion?: string;
  imagen: string;
  activo: boolean;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}

const QrCodeSchema: Schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    imagen: {
      type: String,
      required: false,
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "fechaCreacion",
      updatedAt: "fechaActualizacion",
    },
  }
);

export default mongoose.model<IQrCode>("QrCode", QrCodeSchema);
