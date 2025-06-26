import type { Usuario } from "../models/Usuario";
import UsuarioModel from "../models/Usuario";
import mongoose from "mongoose";

export type UsuarioCreationParams = Omit<
  Usuario,
  "_id" | "createdAt" | "updatedAt"
>;

export class UsuariosService {
  public async get(id: string, correo?: string): Promise<Usuario | null> {
    try {
      if (correo) {
        return await UsuarioModel.findOne({ correo }).exec();
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid user ID format");
      }

      return await UsuarioModel.findById(id).exec();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  public async getAll(): Promise<Usuario[]> {
    try {
      return await UsuarioModel.find({}).exec();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  public async create(
    usuarioCreationParams: UsuarioCreationParams
  ): Promise<Usuario> {
    try {
      const usuario = new UsuarioModel(usuarioCreationParams);
      return await usuario.save();
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  public async update(
    id: string,
    updateParams: Partial<UsuarioCreationParams>
  ): Promise<Usuario | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid user ID format");
      }

      return await UsuarioModel.findByIdAndUpdate(id, updateParams, {
        new: true,
        runValidators: true,
      }).exec();
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid user ID format");
      }

      const result = await UsuarioModel.findByIdAndDelete(id).exec();
      return result !== null;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}
