import mongoose from "mongoose";

export interface Documento {
  _id?: mongoose.Types.ObjectId;
  nombre: string;
  categoria: string;
  archivo: string;
  peso?: string;
  fecha: Date;
  disponible: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const DocumentoSchema = new mongoose.Schema<Documento>(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    archivo: {
      type: String,
      required: true,
      trim: true,
    },
    peso: {
      type: String,
      required: false,
      trim: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    disponible: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "documentos",
  }
);

const DocumentoModel = mongoose.model<Documento>("Documento", DocumentoSchema);
export default DocumentoModel;
