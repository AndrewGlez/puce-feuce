import type { Documento } from "../models/Documentos";
import DocumentoModel from "../models/Documentos";
import mongoose from "mongoose";

export type DocumentoCreationParams = Omit<
  Documento,
  "_id" | "createdAt" | "updatedAt"
>;

export class DocumentosService {
  public async get(id: string): Promise<Documento | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid document ID format");
    }
    return await DocumentoModel.findById(id).exec();
  }

  public async getAll(): Promise<Documento[]> {
    return await DocumentoModel.find({}).sort({ fecha: -1 }).exec();
  }

  public async create(params: DocumentoCreationParams): Promise<Documento> {
    const doc = new DocumentoModel(params);
    return await doc.save();
  }

  public async update(
    id: string,
    params: Partial<DocumentoCreationParams>
  ): Promise<Documento | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid document ID format");
    }
    return await DocumentoModel.findByIdAndUpdate(id, params, {
      new: true,
    }).exec();
  }

  public async delete(id: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid document ID format");
    }
    const result = await DocumentoModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
