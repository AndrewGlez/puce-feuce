/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsuariosController } from './../controllers/UsuarioController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EventosController } from './../controllers/EventosController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Usuario": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "correo": {"dataType":"string","required":true},
            "contraseña": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ValidateErrorJSON": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"enum","enums":["Validation failed"],"required":true},
            "details": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Usuario.Exclude_keyofUsuario.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"correo":{"dataType":"string","required":true},"contraseña":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Usuario.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Usuario.Exclude_keyofUsuario.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UsuarioCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Usuario.id_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Eventos": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "titulo": {"dataType":"string","required":true},
            "descripcion": {"dataType":"string","required":true},
            "fecha_inicio": {"dataType":"datetime","required":true},
            "tipo_evento": {"dataType":"string","required":true},
            "enlace": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Eventos.Exclude_keyofEventos.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"titulo":{"dataType":"string","required":true},"descripcion":{"dataType":"string","required":true},"fecha_inicio":{"dataType":"datetime","required":true},"tipo_evento":{"dataType":"string","required":true},"enlace":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Eventos.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Eventos.Exclude_keyofEventos.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EventoCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Eventos.id_","validators":{}},
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
                usuarioId: {"in":"path","name":"usuarioId","required":true,"dataType":"double"},
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
        const argsEventosController_getEvento: Record<string, TsoaRoute.ParameterSchema> = {
                eventoId: {"in":"path","name":"eventoId","required":true,"dataType":"double"},
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

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
