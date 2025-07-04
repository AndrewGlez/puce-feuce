// Modelo del Usuario. (Hola Elvis)

import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

// Método para encriptar la contraseña antes de guardar el usuario
usuarioSchema.pre("save", async function (next) {
  // Si la contraseña no ha sido modificada, no hacer nada
  if (!this.isModified("contraseña")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Agregar un índice único para el correo electrónico
usuarioSchema.index({ correo: 1 });

const UsuarioModel = mongoose.model<Usuario>("Usuario", usuarioSchema);

export default UsuarioModel;
