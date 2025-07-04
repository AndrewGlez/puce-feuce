// Modelo del Usuario. (Hola Elvis)

import mongoose from "mongoose";

export interface Usuario {
  _id?: mongoose.Types.ObjectId;
  correo: string;
  contraseña: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const usuarioSchema = new mongoose.Schema<Usuario>(
  {
    correo: {
      type: String,
      required: [true, "El correo es requerido"],
      unique: [true, "El correo ya está en uso"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Correo inválido",
      ],
    },
    contraseña: {
      type: String,
      required: [true, "La contraseña es requerida"],
    },
  },
  {
    timestamps: true,
    collection: "usuarios",
  }
);

// Agregar un índice único para el correo electrónico
usuarioSchema.index({ correo: 1 });

const UsuarioModel = mongoose.model<Usuario>("Usuario", usuarioSchema);

export default UsuarioModel;
