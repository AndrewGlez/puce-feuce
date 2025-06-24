import type { Eventos } from "../models/Eventos";

export type EventoCreationParams = Omit<Eventos, "id">;

export class EventosService {
  public get(id: number, titulo?: string): Eventos {
    return {
      id,
      titulo: titulo ?? "Evento Genérico",
      descripcion: "Descripción del evento",
      fecha_inicio: new Date(),
      tipo_evento: "Conferencia",
      enlace: "https://evento.com",
    };
  }

  public create(eventoCreationParams: EventoCreationParams): Eventos {
    return {
      id: Math.floor(Math.random() * 10000),
      ...eventoCreationParams,
    };
  }
}
