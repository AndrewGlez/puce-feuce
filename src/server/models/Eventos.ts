// Modelo de los Eventos.

import mongoose from "mongoose";

export interface Eventos {
  _id?: mongoose.Types.ObjectId;
  titulo: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
  tipo_evento: string;
  enlace: string;
  ubicacion?: string;
  organizador?: mongoose.Types.ObjectId;
  participantes?: mongoose.Types.ObjectId[];
  estado: "activo" | "cancelado" | "finalizado";
  createdAt?: Date;
  updatedAt?: Date;
}

const EventosSchema = new mongoose.Schema<Eventos>(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    fecha_inicio: {
      type: Date,
      required: true,
      validate: {
        validator: function (date: Date) {
          return date >= new Date();
        },
        message: "Start date must be in the future",
      },
    },
    fecha_fin: {
      type: Date,
      validate: {
        validator: function (this: Eventos, date: Date) {
          return !date || date > this.fecha_inicio;
        },
        message: "End date must be after start date",
      },
    },
    tipo_evento: {
      type: String,
      required: true,
      enum: [
        "conferencia",
        "taller",
        "seminario",
        "webinar",
        "reunion",
        "curso",
        "otro",
      ],
      lowercase: true,
    },
    enlace: {
      type: String,
      required: false,
    },
    ubicacion: {
      type: String,
      trim: true,
    },
    organizador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    participantes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
      },
    ],
    estado: {
      type: String,
      enum: ["activo", "cancelado", "finalizado"],
      default: "activo",
    },
  },
  {
    timestamps: true,
    collection: "eventos",
  }
);

EventosSchema.index({ fecha_inicio: 1 });
EventosSchema.index({ tipo_evento: 1 });
EventosSchema.index({ estado: 1 });
EventosSchema.index({ organizador: 1 });

const EventosModel = mongoose.model<Eventos>("Eventos", EventosSchema);

export default EventosModel;
