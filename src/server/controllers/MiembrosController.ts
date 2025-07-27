import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import type { Miembro } from "../models/Miembro";
import {
  MiembrosService,
  type MiembroCreationParams,
} from "../service/MiembrosService";

@Tags("Miembros")
@Route("miembros")
export class MiembrosController extends Controller {
  @Get("{miembroId}")
  @Response(404, "Miembro not found")
  public async getMiembro(@Path() miembroId: string): Promise<Miembro | null> {
    try {
      return await new MiembrosService().get(miembroId);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Get()
  public async getMiembros(): Promise<Miembro[]> {
    try {
      return await new MiembrosService().getAll();
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createMiembro(
    @Body() requestBody: MiembroCreationParams
  ): Promise<Miembro> {
    try {
      this.setStatus(201);
      return await new MiembrosService().create(requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Put("{miembroId}")
  @Response(404, "Miembro not found")
  public async updateMiembro(
    @Path() miembroId: string,
    @Body() requestBody: Partial<MiembroCreationParams>
  ): Promise<Miembro | null> {
    try {
      return await new MiembrosService().update(miembroId, requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Delete("{miembroId}")
  @Response(404, "Miembro not found")
  public async deleteMiembro(
    @Path() miembroId: string
  ): Promise<{ success: boolean }> {
    try {
      const success = await new MiembrosService().delete(miembroId);
      if (!success) {
        this.setStatus(404);
        throw new Error("Miembro not found");
      }
      return { success };
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }
}
