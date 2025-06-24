import type { Usuario } from "../models/Usuario";

export type UsuarioCreationParams = Omit<Usuario, "id">;

export class UsuariosService {
  public get(id: number, correo?: string): Usuario {
    return {
      id,
      correo: correo ?? "ejemplo@correo.com",
      contraseña: "clave1234",
    };
  }

  public create(usuarioCreationParams: UsuarioCreationParams): Usuario {
    return {
      id: Math.floor(Math.random() * 10000),
      ...usuarioCreationParams,
    };
  }
}
