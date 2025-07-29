export interface Documento {
  _id?: string;
  nombre: string;
  categoria: string;
  archivo: string;
  peso?: string;
  fecha: Date;
  disponible: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type DocumentoCreationParams = Omit<
  Documento,
  "_id" | "createdAt" | "updatedAt"
>; 