import {
  Body,
  Controller,
  Get,
  Path,
  Post,
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

interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}
@Tags("Usuarios")
@Route("usuarios")
export class UsuariosController extends Controller {
  @Get("{usuarioId}")
  @Response<ValidateErrorJSON>(400, "Validation failed")
  @Response<Usuario>(404, "Usuario not found")
  public async getUsuario(
    @Path() usuarioId: number,
    @Query() correo?: string
  ): Promise<Usuario> {
    return new UsuariosService().get(usuarioId, correo);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUsuario(
    @Body() requestBody: UsuarioCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new UsuariosService().create(requestBody);
    return;
  }
}
