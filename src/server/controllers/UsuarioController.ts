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
import type { Usuario } from "../models/Usuario";
import {
  UsuariosService,
  type UsuarioCreationParams,
} from "../service/UsuarioService";

@Tags("Usuarios")
@Route("usuarios")
export class UsuariosController extends Controller {
  /**
   * Obtiene un usuario específico por su ID.
   *
   * @param usuarioId - El identificador único del usuario que se desea obtener.
   * @param correo - Filtro opcional por correo del usuario.
   * @returns Una promesa que resuelve con el usuario encontrado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la obtención.
   */
  @Get("{usuarioId}")
  @Response(404, "Usuario not found")
  public async getUsuario(
    @Path() usuarioId: string,
    @Query() correo?: string
  ): Promise<Usuario | null> {
    try {
      return await new UsuariosService().get(usuarioId, correo);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  /**
   * Obtiene todos los usuarios.
   *
   * @returns Una promesa que resuelve con una lista de usuarios.
   * @throws Lanza un error si ocurre algún problema durante la obtención.
   */
  @Get()
  public async getUsuarios(): Promise<Usuario[]> {
    try {
      return await new UsuariosService().getAll();
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  /**
   * Crea un nuevo usuario.
   *
   * @param requestBody - Los datos del usuario a crear.
   * @returns Una promesa que resuelve con el usuario creado.
   * @throws Lanza un error si ocurre algún problema durante la creación.
   */
  @SuccessResponse("201", "Created")
  @Post()
  public async createUsuario(
    @Body() requestBody: UsuarioCreationParams
  ): Promise<Usuario> {
    try {
      this.setStatus(201);
      return await new UsuariosService().create(requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  /**
   * Actualiza un usuario específico.
   *
   * @param usuarioId - El identificador único del usuario que se desea actualizar.
   * @param requestBody - Los datos actualizados del usuario.
   * @returns Una promesa que resuelve con el usuario actualizado o `null` si no se encuentra.
   * @throws Lanza un error si ocurre algún problema durante la actualización.
   */
  @Put("{usuarioId}")
  @Response(404, "Usuario not found")
  public async updateUsuario(
    @Path() usuarioId: string,
    @Body() requestBody: Partial<UsuarioCreationParams>
  ): Promise<Usuario | null> {
    try {
      return await new UsuariosService().update(usuarioId, requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  /**
   * Elimina un usuario específico.
   *
   * @param usuarioId - El identificador único del usuario que se desea eliminar.
   * @returns Una promesa que resuelve con un objeto que indica si la eliminación fue exitosa.
   * @throws Lanza un error si ocurre algún problema durante la operación.
   */
  @Delete("{usuarioId}")
  @Response(404, "Usuario not found")
  public async deleteUsuario(
    @Path() usuarioId: string
  ): Promise<{ success: boolean }> {
    try {
      const success = await new UsuariosService().delete(usuarioId);
      if (!success) {
        this.setStatus(404);
        throw new Error("Usuario not found");
      }
      return { success };
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }
}
