import type { Eventos } from "../models/Eventos";
import EventosModel from "../models/Eventos";
import mongoose from "mongoose";

export type EventoCreationParams = Omit<
  Eventos,
  "_id" | "createdAt" | "updatedAt"
>;

export class EventosService {
  public async get(id: string, titulo?: string): Promise<Eventos | null> {
    try {
      if (titulo) {
        return await EventosModel.findOne({ titulo })
          .populate("organizador participantes")
          .exec();
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid event ID format");
      }

      return await EventosModel.findById(id)
        .populate("organizador participantes")
        .exec();
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  }

  public async getAll(filters?: {
    tipo_evento?: string;
    estado?: string;
    fecha_desde?: Date;
    fecha_hasta?: Date;
  }): Promise<Eventos[]> {
    try {
      let query = EventosModel.find({});

      if (filters?.tipo_evento) {
        query = query.where("tipo_evento").equals(filters.tipo_evento);
      }

      if (filters?.estado) {
        query = query.where("estado").equals(filters.estado);
      }

      if (filters?.fecha_desde) {
        query = query.where("fecha_inicio", { $gte: filters.fecha_desde });
      }

      if (filters?.fecha_hasta) {
        query = query.where("fecha_inicio", { $lte: filters.fecha_hasta });
      }

      return await query
        .populate("organizador participantes")
        .sort({ fecha_inicio: 1 })
        .exec();
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  }

  public async create(
    eventoCreationParams: EventoCreationParams
  ): Promise<Eventos> {
    try {
      const evento = new EventosModel(eventoCreationParams);
      return await evento.save();
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  }

  public async update(
    id: string,
    updateParams: Partial<EventoCreationParams>
  ): Promise<Eventos | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid event ID format");
      }

      return await EventosModel.findByIdAndUpdate(id, updateParams, {
        new: true,
        runValidators: false,
      })
        .populate("organizador participantes")
        .exec();
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid event ID format");
      }

      const result = await EventosModel.findByIdAndDelete(id).exec();
      return result !== null;
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  }

  public async addParticipante(
    eventoId: string,
    participanteId: string
  ): Promise<Eventos | null> {
    try {
      if (
        !mongoose.Types.ObjectId.isValid(eventoId) ||
        !mongoose.Types.ObjectId.isValid(participanteId)
      ) {
        throw new Error("Invalid ID format");
      }

      return await EventosModel.findByIdAndUpdate(
        eventoId,
        { $addToSet: { participantes: participanteId } },
        { new: true, runValidators: true }
      )
        .populate("organizador participantes")
        .exec();
    } catch (error) {
      console.error("Error adding participant:", error);
      throw error;
    }
  }

  public async removeParticipante(
    eventoId: string,
    participanteId: string
  ): Promise<Eventos | null> {
    try {
      if (
        !mongoose.Types.ObjectId.isValid(eventoId) ||
        !mongoose.Types.ObjectId.isValid(participanteId)
      ) {
        throw new Error("Invalid ID format");
      }

      return await EventosModel.findByIdAndUpdate(
        eventoId,
        { $pull: { participantes: participanteId } },
        { new: true, runValidators: true }
      )
        .populate("organizador participantes")
        .exec();
    } catch (error) {
      console.error("Error removing participant:", error);
      throw error;
    }
  }
}
