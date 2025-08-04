export interface QrCode {
  _id: string;
  nombre: string;
  descripcion?: string;
  imagen: string;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}
