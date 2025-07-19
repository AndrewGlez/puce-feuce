export interface Eventos {
  _id?: string;
  titulo: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
  tipo_evento:
    | "conferencia"
    | "taller"
    | "seminario"
    | "webinar"
    | "reunion"
    | "curso"
    | "otro";
  enlace?: string;
  etiquetaEnlace: string;
  imagen?: string;
  ubicacion?: string;
  organizador?: string;
  participantes?: string[];
  estado: "Próximamente" | "Inscripciones Abiertas" | "Finalizado";
  createdAt?: Date;
  updatedAt?: Date;
}
