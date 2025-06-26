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
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    contraseña: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    collection: "usuarios", // Custom collection name
  }
);

// Add indexes for better performance
usuarioSchema.index({ correo: 1 });

const UsuarioModel = mongoose.model<Usuario>("Usuario", usuarioSchema);

export default UsuarioModel;
