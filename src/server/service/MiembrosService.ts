import type { Miembro } from "../models/Miembro";
import MiembroModel from "../models/Miembro";
import mongoose from "mongoose";

export type MiembroCreationParams = Omit<
  Miembro,
  "_id" | "createdAt" | "updatedAt"
>;

export class MiembrosService {
  public async get(id: string): Promise<Miembro | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid member ID format");
    }
    return await MiembroModel.findById(id).exec();
  }

  public async getAll(): Promise<Miembro[]> {
    return await MiembroModel.find({}).sort({ name: 1 }).exec();
  }

  public async create(params: MiembroCreationParams): Promise<Miembro> {
    const member = new MiembroModel(params);
    return await member.save();
  }

  public async update(
    id: string,
    params: Partial<MiembroCreationParams>
  ): Promise<Miembro | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid member ID format");
    }
    return await MiembroModel.findByIdAndUpdate(id, params, {
      new: true,
    }).exec();
  }

  public async delete(id: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid member ID format");
    }
    const result = await MiembroModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
