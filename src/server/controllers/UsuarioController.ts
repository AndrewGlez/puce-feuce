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

  @Get()
  public async getUsuarios(): Promise<Usuario[]> {
    try {
      return await new UsuariosService().getAll();
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

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
