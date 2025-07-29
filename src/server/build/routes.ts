/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsuariosController } from './../controllers/UsuarioController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MiembrosController } from './../controllers/MiembrosController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EventosController } from './../controllers/EventosController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DocumentosController } from './../controllers/DocumentosController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "mongoose.Types.ObjectId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Usuario": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"mongoose.Types.ObjectId"},
            "correo": {"dataType":"string","required":true},
            "contraseña": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Usuario.Exclude_keyofUsuario._id-or-createdAt-or-updatedAt__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"correo":{"dataType":"string","required":true},"contraseña":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Usuario._id-or-createdAt-or-updatedAt_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Usuario.Exclude_keyofUsuario._id-or-createdAt-or-updatedAt__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UsuarioCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Usuario._id-or-createdAt-or-updatedAt_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_UsuarioCreationParams_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"correo":{"dataType":"string"},"contraseña":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Miembro": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"mongoose.Types.ObjectId"},
            "name": {"dataType":"string","required":true},
            "role": {"dataType":"string","required":true},
            "department": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "image": {"dataType":"string"},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Miembro.Exclude_keyofMiembro._id-or-createdAt-or-updatedAt__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"role":{"dataType":"string","required":true},"department":{"dataType":"string","required":true},"email":{"dataType":"string","required":true},"image":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Miembro._id-or-createdAt-or-updatedAt_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Miembro.Exclude_keyofMiembro._id-or-createdAt-or-updatedAt__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MiembroCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Miembro._id-or-createdAt-or-updatedAt_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_MiembroCreationParams_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string"},"role":{"dataType":"string"},"department":{"dataType":"string"},"email":{"dataType":"string"},"image":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Eventos": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"mongoose.Types.ObjectId"},
            "titulo": {"dataType":"string","required":true},
            "descripcion": {"dataType":"string","required":true},
            "fecha_inicio": {"dataType":"datetime","required":true},
            "fecha_fin": {"dataType":"datetime"},
            "tipo_evento": {"dataType":"string","required":true},
            "enlace": {"dataType":"string","required":true},
            "etiquetaEnlace": {"dataType":"string"},
            "imagen": {"dataType":"string"},
            "ubicacion": {"dataType":"string"},
            "organizador": {"ref":"mongoose.Types.ObjectId"},
            "participantes": {"dataType":"array","array":{"dataType":"refAlias","ref":"mongoose.Types.ObjectId"}},
            "estado": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Inscripciones Abiertas"]},{"dataType":"enum","enums":["Próximamente"]},{"dataType":"enum","enums":["Finalizado"]}],"required":true},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Eventos.Exclude_keyofEventos._id-or-createdAt-or-updatedAt__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"titulo":{"dataType":"string","required":true},"descripcion":{"dataType":"string","required":true},"fecha_inicio":{"dataType":"datetime","required":true},"fecha_fin":{"dataType":"datetime"},"tipo_evento":{"dataType":"string","required":true},"enlace":{"dataType":"string","required":true},"etiquetaEnlace":{"dataType":"string"},"imagen":{"dataType":"string"},"ubicacion":{"dataType":"string"},"organizador":{"ref":"mongoose.Types.ObjectId"},"participantes":{"dataType":"array","array":{"dataType":"refAlias","ref":"mongoose.Types.ObjectId"}},"estado":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Inscripciones Abiertas"]},{"dataType":"enum","enums":["Próximamente"]},{"dataType":"enum","enums":["Finalizado"]}],"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Eventos._id-or-createdAt-or-updatedAt_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Eventos.Exclude_keyofEventos._id-or-createdAt-or-updatedAt__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EventoCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Eventos._id-or-createdAt-or-updatedAt_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_EventoCreationParams_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"titulo":{"dataType":"string"},"descripcion":{"dataType":"string"},"fecha_inicio":{"dataType":"datetime"},"fecha_fin":{"dataType":"datetime"},"tipo_evento":{"dataType":"string"},"enlace":{"dataType":"string"},"etiquetaEnlace":{"dataType":"string"},"imagen":{"dataType":"string"},"ubicacion":{"dataType":"string"},"organizador":{"ref":"mongoose.Types.ObjectId"},"participantes":{"dataType":"array","array":{"dataType":"refAlias","ref":"mongoose.Types.ObjectId"}},"estado":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Inscripciones Abiertas"]},{"dataType":"enum","enums":["Próximamente"]},{"dataType":"enum","enums":["Finalizado"]}]}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Documento": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"mongoose.Types.ObjectId"},
            "nombre": {"dataType":"string","required":true},
            "categoria": {"dataType":"string","required":true},
            "archivo": {"dataType":"string","required":true},
            "peso": {"dataType":"string"},
            "fecha": {"dataType":"datetime","required":true},
            "disponible": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Documento.Exclude_keyofDocumento._id-or-createdAt-or-updatedAt__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"nombre":{"dataType":"string","required":true},"categoria":{"dataType":"string","required":true},"archivo":{"dataType":"string","required":true},"peso":{"dataType":"string"},"fecha":{"dataType":"datetime","required":true},"disponible":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Documento._id-or-createdAt-or-updatedAt_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Documento.Exclude_keyofDocumento._id-or-createdAt-or-updatedAt__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DocumentoCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Documento._id-or-createdAt-or-updatedAt_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_DocumentoCreationParams_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"nombre":{"dataType":"string"},"categoria":{"dataType":"string"},"archivo":{"dataType":"string"},"peso":{"dataType":"string"},"fecha":{"dataType":"datetime"},"disponible":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUsuariosController_getUsuario: Record<string, TsoaRoute.ParameterSchema> = {
                usuarioId: {"in":"path","name":"usuarioId","required":true,"dataType":"string"},
                correo: {"in":"query","name":"correo","dataType":"string"},
        };
        app.get('/usuarios/:usuarioId',
            ...(fetchMiddlewares<RequestHandler>(UsuariosController)),
            ...(fetchMiddlewares<RequestHandler>(UsuariosController.prototype.getUsuario)),

            async function UsuariosController_getUsuario(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsuariosController_getUsuario, request, response });

                const controller = new UsuariosController();

              await templateService.apiHandler({
                methodName: 'getUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUsuariosController_getUsuarios: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/usuarios',
            ...(fetchMiddlewares<RequestHandler>(UsuariosController)),
            ...(fetchMiddlewares<RequestHandler>(UsuariosController.prototype.getUsuarios)),

            async function UsuariosController_getUsuarios(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsuariosController_getUsuarios, request, response });

                const controller = new UsuariosController();

              await templateService.apiHandler({
                methodName: 'getUsuarios',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUsuariosController_createUsuario: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UsuarioCreationParams"},
        };
        app.post('/usuarios',
            ...(fetchMiddlewares<RequestHandler>(UsuariosController)),
            ...(fetchMiddlewares<RequestHandler>(UsuariosController.prototype.createUsuario)),

            async function UsuariosController_createUsuario(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsuariosController_createUsuario, request, response });

                const controller = new UsuariosController();

              await templateService.apiHandler({
                methodName: 'createUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUsuariosController_updateUsuario: Record<string, TsoaRoute.ParameterSchema> = {
                usuarioId: {"in":"path","name":"usuarioId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_UsuarioCreationParams_"},
        };
        app.put('/usuarios/:usuarioId',
            ...(fetchMiddlewares<RequestHandler>(UsuariosController)),
            ...(fetchMiddlewares<RequestHandler>(UsuariosController.prototype.updateUsuario)),

            async function UsuariosController_updateUsuario(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsuariosController_updateUsuario, request, response });

                const controller = new UsuariosController();

              await templateService.apiHandler({
                methodName: 'updateUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUsuariosController_deleteUsuario: Record<string, TsoaRoute.ParameterSchema> = {
                usuarioId: {"in":"path","name":"usuarioId","required":true,"dataType":"string"},
        };
        app.delete('/usuarios/:usuarioId',
            ...(fetchMiddlewares<RequestHandler>(UsuariosController)),
            ...(fetchMiddlewares<RequestHandler>(UsuariosController.prototype.deleteUsuario)),

            async function UsuariosController_deleteUsuario(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsuariosController_deleteUsuario, request, response });

                const controller = new UsuariosController();

              await templateService.apiHandler({
                methodName: 'deleteUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMiembrosController_getMiembro: Record<string, TsoaRoute.ParameterSchema> = {
                miembroId: {"in":"path","name":"miembroId","required":true,"dataType":"string"},
        };
        app.get('/miembros/:miembroId',
            ...(fetchMiddlewares<RequestHandler>(MiembrosController)),
            ...(fetchMiddlewares<RequestHandler>(MiembrosController.prototype.getMiembro)),

            async function MiembrosController_getMiembro(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMiembrosController_getMiembro, request, response });

                const controller = new MiembrosController();

              await templateService.apiHandler({
                methodName: 'getMiembro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMiembrosController_getMiembros: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/miembros',
            ...(fetchMiddlewares<RequestHandler>(MiembrosController)),
            ...(fetchMiddlewares<RequestHandler>(MiembrosController.prototype.getMiembros)),

            async function MiembrosController_getMiembros(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMiembrosController_getMiembros, request, response });

                const controller = new MiembrosController();

              await templateService.apiHandler({
                methodName: 'getMiembros',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMiembrosController_createMiembro: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"MiembroCreationParams"},
        };
        app.post('/miembros',
            ...(fetchMiddlewares<RequestHandler>(MiembrosController)),
            ...(fetchMiddlewares<RequestHandler>(MiembrosController.prototype.createMiembro)),

            async function MiembrosController_createMiembro(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMiembrosController_createMiembro, request, response });

                const controller = new MiembrosController();

              await templateService.apiHandler({
                methodName: 'createMiembro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMiembrosController_updateMiembro: Record<string, TsoaRoute.ParameterSchema> = {
                miembroId: {"in":"path","name":"miembroId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_MiembroCreationParams_"},
        };
        app.put('/miembros/:miembroId',
            ...(fetchMiddlewares<RequestHandler>(MiembrosController)),
            ...(fetchMiddlewares<RequestHandler>(MiembrosController.prototype.updateMiembro)),

            async function MiembrosController_updateMiembro(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMiembrosController_updateMiembro, request, response });

                const controller = new MiembrosController();

              await templateService.apiHandler({
                methodName: 'updateMiembro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMiembrosController_deleteMiembro: Record<string, TsoaRoute.ParameterSchema> = {
                miembroId: {"in":"path","name":"miembroId","required":true,"dataType":"string"},
        };
        app.delete('/miembros/:miembroId',
            ...(fetchMiddlewares<RequestHandler>(MiembrosController)),
            ...(fetchMiddlewares<RequestHandler>(MiembrosController.prototype.deleteMiembro)),

            async function MiembrosController_deleteMiembro(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMiembrosController_deleteMiembro, request, response });

                const controller = new MiembrosController();

              await templateService.apiHandler({
                methodName: 'deleteMiembro',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_getEvento: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"string"},
                titulo: {"in":"query","name":"titulo","dataType":"string"},
        };
        app.get('/eventos/:eventoId',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.getEvento)),

            async function EventosController_getEvento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_getEvento, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'getEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_getEventos: Record<string, TsoaRoute.ParameterSchema> = {
                tipo_evento: {"in":"query","name":"tipo_evento","dataType":"string"},
                estado: {"in":"query","name":"estado","dataType":"string"},
                fecha_desde: {"in":"query","name":"fecha_desde","dataType":"string"},
                fecha_hasta: {"in":"query","name":"fecha_hasta","dataType":"string"},
        };
        app.get('/eventos',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.getEventos)),

            async function EventosController_getEventos(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_getEventos, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'getEventos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_createEvento: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"EventoCreationParams"},
        };
        app.post('/eventos',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.createEvento)),

            async function EventosController_createEvento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_createEvento, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'createEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_updateEvento: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_EventoCreationParams_"},
        };
        app.put('/eventos/:eventoId',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.updateEvento)),

            async function EventosController_updateEvento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_updateEvento, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'updateEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_deleteEvento: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"string"},
        };
        app.delete('/eventos/:eventoId',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.deleteEvento)),

            async function EventosController_deleteEvento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_deleteEvento, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'deleteEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_addParticipante: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"string"},
                participanteId: {"in":"path","name":"participanteId","required":true,"dataType":"string"},
        };
        app.post('/eventos/:eventoId/participantes/:participanteId',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.addParticipante)),

            async function EventosController_addParticipante(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_addParticipante, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'addParticipante',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEventosController_removeParticipante: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"string"},
                participanteId: {"in":"path","name":"participanteId","required":true,"dataType":"string"},
        };
        app.delete('/eventos/:eventoId/participantes/:participanteId',
            ...(fetchMiddlewares<RequestHandler>(EventosController)),
            ...(fetchMiddlewares<RequestHandler>(EventosController.prototype.removeParticipante)),

            async function EventosController_removeParticipante(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEventosController_removeParticipante, request, response });

                const controller = new EventosController();

              await templateService.apiHandler({
                methodName: 'removeParticipante',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentosController_getDocumento: Record<string, TsoaRoute.ParameterSchema> = {
                documentoId: {"in":"path","name":"documentoId","required":true,"dataType":"string"},
        };
        app.get('/documentos/:documentoId',
            ...(fetchMiddlewares<RequestHandler>(DocumentosController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentosController.prototype.getDocumento)),

            async function DocumentosController_getDocumento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentosController_getDocumento, request, response });

                const controller = new DocumentosController();

              await templateService.apiHandler({
                methodName: 'getDocumento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentosController_getDocumentos: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/documentos',
            ...(fetchMiddlewares<RequestHandler>(DocumentosController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentosController.prototype.getDocumentos)),

            async function DocumentosController_getDocumentos(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentosController_getDocumentos, request, response });

                const controller = new DocumentosController();

              await templateService.apiHandler({
                methodName: 'getDocumentos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentosController_createDocumento: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DocumentoCreationParams"},
        };
        app.post('/documentos',
            ...(fetchMiddlewares<RequestHandler>(DocumentosController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentosController.prototype.createDocumento)),

            async function DocumentosController_createDocumento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentosController_createDocumento, request, response });

                const controller = new DocumentosController();

              await templateService.apiHandler({
                methodName: 'createDocumento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentosController_updateDocumento: Record<string, TsoaRoute.ParameterSchema> = {
                documentoId: {"in":"path","name":"documentoId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_DocumentoCreationParams_"},
        };
        app.put('/documentos/:documentoId',
            ...(fetchMiddlewares<RequestHandler>(DocumentosController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentosController.prototype.updateDocumento)),

            async function DocumentosController_updateDocumento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentosController_updateDocumento, request, response });

                const controller = new DocumentosController();

              await templateService.apiHandler({
                methodName: 'updateDocumento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDocumentosController_deleteDocumento: Record<string, TsoaRoute.ParameterSchema> = {
                documentoId: {"in":"path","name":"documentoId","required":true,"dataType":"string"},
        };
        app.delete('/documentos/:documentoId',
            ...(fetchMiddlewares<RequestHandler>(DocumentosController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentosController.prototype.deleteDocumento)),

            async function DocumentosController_deleteDocumento(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentosController_deleteDocumento, request, response });

                const controller = new DocumentosController();

              await templateService.apiHandler({
                methodName: 'deleteDocumento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
