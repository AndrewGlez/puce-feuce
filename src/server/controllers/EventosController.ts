import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import type { Eventos } from "../models/Eventos";
import {
  EventosService,
  type EventoCreationParams,
} from "../service/EventosService";

@Tags("Eventos")
@Route("eventos")
export class EventosController extends Controller {
  @Get("{eventoId}")
  @Response(404, "Evento not found")
  public async getEvento(
    @Path() eventoId: string,
    @Query() titulo?: string
  ): Promise<Eventos | null> {
    try {
      return await new EventosService().get(eventoId, titulo);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Get()
  public async getEventos(
    @Query() tipo_evento?: string,
    @Query() estado?: string,
    @Query() fecha_desde?: string,
    @Query() fecha_hasta?: string
  ): Promise<Eventos[]> {
    try {
      const filters: {
        tipo_evento?: string;
        estado?: string;
        fecha_desde?: Date;
        fecha_hasta?: Date;
      } = {};

      if (tipo_evento) filters.tipo_evento = tipo_evento;
      if (estado) filters.estado = estado;
      if (fecha_desde) filters.fecha_desde = new Date(fecha_desde);
      if (fecha_hasta) filters.fecha_hasta = new Date(fecha_hasta);

      return await new EventosService().getAll(filters);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createEvento(
    @Body() requestBody: EventoCreationParams
  ): Promise<Eventos> {
    try {
      this.setStatus(201);
      return await new EventosService().create(requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Put("{eventoId}")
  @Response(404, "Evento not found")
  public async updateEvento(
    @Path() eventoId: string,
    @Body() requestBody: Partial<EventoCreationParams>
  ): Promise<Eventos | null> {
    try {
      return await new EventosService().update(eventoId, requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Delete("{eventoId}")
  @Response(404, "Evento not found")
  public async deleteEvento(
    @Path() eventoId: string
  ): Promise<{ success: boolean }> {
    try {
      const success = await new EventosService().delete(eventoId);
      if (!success) {
        this.setStatus(404);
        throw new Error("Evento not found");
      }
      return { success };
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Post("{eventoId}/participantes/{participanteId}")
  @Response(404, "Evento or participant not found")
  public async addParticipante(
    @Path() eventoId: string,
    @Path() participanteId: string
  ): Promise<Eventos | null> {
    try {
      return await new EventosService().addParticipante(
        eventoId,
        participanteId
      );
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Delete("{eventoId}/participantes/{participanteId}")
  @Response(404, "Evento or participant not found")
  public async removeParticipante(
    @Path() eventoId: string,
    @Path() participanteId: string
  ): Promise<Eventos | null> {
    try {
      return await new EventosService().removeParticipante(
        eventoId,
        participanteId
      );
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }
}
