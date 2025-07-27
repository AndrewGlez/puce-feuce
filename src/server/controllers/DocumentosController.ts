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
import type { Documento } from "../models/Documentos";
import {
  DocumentosService,
  type DocumentoCreationParams,
} from "../service/DocumentosService";

@Tags("Documentos")
@Route("documentos")
export class DocumentosController extends Controller {
  @Get("{documentoId}")
  @Response(404, "Documento not found")
  public async getDocumento(
    @Path() documentoId: string
  ): Promise<Documento | null> {
    try {
      return await new DocumentosService().get(documentoId);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Get()
  public async getDocumentos(): Promise<Documento[]> {
    try {
      return await new DocumentosService().getAll();
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createDocumento(
    @Body() requestBody: DocumentoCreationParams
  ): Promise<Documento> {
    try {
      this.setStatus(201);
      return await new DocumentosService().create(requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Put("{documentoId}")
  @Response(404, "Documento not found")
  public async updateDocumento(
    @Path() documentoId: string,
    @Body() requestBody: Partial<DocumentoCreationParams>
  ): Promise<Documento | null> {
    try {
      return await new DocumentosService().update(documentoId, requestBody);
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }

  @Delete("{documentoId}")
  @Response(404, "Documento not found")
  public async deleteDocumento(
    @Path() documentoId: string
  ): Promise<{ success: boolean }> {
    try {
      const success = await new DocumentosService().delete(documentoId);
      if (!success) {
        this.setStatus(404);
        throw new Error("Documento not found");
      }
      return { success };
    } catch (error) {
      this.setStatus(400);
      throw error;
    }
  }
}
