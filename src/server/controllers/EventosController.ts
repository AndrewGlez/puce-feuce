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
  /**
   * Obtiene un evento específico por su ID.
   *
   * @param eventoId - El identificador único del evento que se desea obtener.
   * @param titulo - Filtro opcional por título del evento.
   * @returns Una promesa que resuelve con el evento encontrado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la obtención.
   */
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

  /**
   * Obtiene todos los eventos.
   *
   * @param tipo_evento - Filtro opcional por tipo de evento.
   * @param estado - Filtro opcional por estado del evento.
   * @param fecha_desde - Filtro opcional por fecha de inicio.
   * @param fecha_hasta - Filtro opcional por fecha de fin.
   * @returns Una promesa que resuelve con una lista de eventos.
   * @throws Lanza un error si ocurre algún problema durante la obtención.
   */
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

  /**
   * Crea un nuevo evento.
   *
   * @param requestBody - Los datos del evento a crear.
   * @returns Una promesa que resuelve con el evento creado.
   * @throws Lanza un error si ocurre algún problema durante la creación.
   */
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

  /**
   * Actualiza un evento específico.
   *
   * @param eventoId - El identificador único del evento que se desea actualizar.
   * @param requestBody - Los datos actualizados del evento.
   * @returns Una promesa que resuelve con el evento actualizado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la actualización.
   */
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

  /**
   * Elimina un evento específico.
   *
   * @param eventoId - El identificador único del evento que se desea eliminar.
   * @returns Una promesa que resuelve con un objeto que indica si la eliminación fue exitosa.
   * @throws Lanza un error si ocurre algún problema durante la operación.
   */
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

  /**
   * Agrega un participante a un evento específico.
   *
   * @param eventoId - El identificador único del evento al que se desea agregar el participante.
   * @param participanteId - El identificador único del participante que se desea agregar al evento.
   * @returns Una promesa que resuelve con el evento actualizado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la operación.
   */
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

  /**
   * Elimina un participante de un evento específico.
   *
   * @param eventoId - El identificador único del evento del cual se desea eliminar al participante.
   * @param participanteId - El identificador único del participante que se desea eliminar del evento.
   * @returns Una promesa que resuelve con el evento actualizado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la eliminación del participante.
   */
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
