import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import type { Eventos } from "../models/Eventos";
import {
  EventosService,
  type EventoCreationParams,
} from "../service/EventosService";

@Route("eventos")
export class EventosController extends Controller {
  @Get("{eventoId}")
  public async getEvento(
    @Path() eventoId: number,
    @Query() titulo?: string
  ): Promise<Eventos> {
    return new EventosService().get(eventoId, titulo);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createEvento(
    @Body() requestBody: EventoCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new EventosService().create(requestBody);
    return;
  }
}
