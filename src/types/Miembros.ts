export interface Miembro {
  _id?: string;
  name: string;
  role: string;
  department: string;
  email: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type MiembroCreationParams = Omit<
  Miembro,
  "_id" | "createdAt" | "updatedAt"
>; 