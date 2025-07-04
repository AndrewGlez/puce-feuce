# Puce-Feuce - Sistema de Gestión de Eventos

Un sistema completo de gestión de eventos desarrollado con React, TypeScript, Node.js, Express y MongoDB. Incluye autenticación de usuarios, gestión de eventos y documentación API automática con Swagger.

## 🚀 Características

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Base de Datos**: MongoDB con Mongoose
- **Autenticación**: Sistema de usuarios con hash de contraseñas usando bcrypt
- **API RESTful**: Documentada automáticamente con TSOA y Swagger
- **Gestión de Eventos**: CRUD completo para eventos con estados
- **Hot Reload**: Desarrollo en tiempo real tanto para frontend como backend

## 📋 Funcionalidades

### Gestión de Usuarios

- Registro y autenticación de usuarios
- Validación de correos electrónicos
- Encriptación segura de contraseñas

### Gestión de Eventos

- Crear, leer, actualizar y eliminar eventos
- Estados de eventos: activo, cancelado, finalizado
- Gestión de participantes y organizadores
- Eventos con fechas de inicio y fin
- Ubicación y enlaces asociados

### API y Documentación

- API RESTful con TypeScript
- Documentación automática con Swagger UI
- Validación de datos con TSOA
- Manejo de errores centralizado

## 🛠️ Tecnologías Utilizadas

### Frontend

- React 19
- TypeScript
- Vite (Build tool)
- CSS modular

### Backend

- Node.js
- Express.js
- TypeScript
- TSOA (OpenAPI/Swagger)
- Morgan (Logging)

### Base de Datos

- MongoDB
- Mongoose ODM

### Herramientas de Desarrollo

- ESLint
- Concurrently
- ts-node-dev
- Hot Module Replacement (HMR)

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd puce-feuce
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto:

```env
MONGODB_URI=mongodb://localhost:27017/puce-feuce
PORT=3000
```

4. **Iniciar MongoDB**
   Asegúrate de tener MongoDB ejecutándose en tu sistema.

## 🚀 Comandos de Desarrollo

### Desarrollo - Frontend y Backend simultáneamente

```bash
npm run dev:all
```

### Solo Frontend

```bash
npm run dev
```

### Solo Backend

```bash
npm run dev:server
```

### Linting

```bash
npm run lint
```

### Build para producción

```bash
npm run build
```

### Preview de producción

```bash
npm run preview
```

## 🏗️ Estructura del Proyecto

```
puce-feuce/
├── src/
│   ├── frontend/              # Aplicación React
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── assets/
│   └── server/                # API Backend
│       ├── index.ts           # Servidor principal
│       ├── models/            # Modelos de MongoDB
│       │   ├── Usuario.ts
│       │   └── Eventos.ts
│       ├── controllers/       # Controladores API
│       │   ├── UsuarioController.ts
│       │   └── EventosController.ts
│       ├── service/           # Lógica de negocio
│       │   ├── UsuarioService.ts
│       │   └── EventosService.ts
│       ├── config/            # Configuraciones
│       │   └── database.ts
│       └── build/             # Archivos generados por TSOA
│           ├── routes.ts
│           └── swagger.json
├── public/                    # Archivos estáticos
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tsoa.json                  # Configuración TSOA
```

## 📚 API Documentation

Una vez iniciado el servidor, la documentación interactiva de la API estará disponible en:

```
http://localhost:3000/docs
```

### Endpoints Principales

#### Usuarios

- `POST /users` - Registrar usuario
- `GET /users` - Listar usuarios
- `GET /users/{id}` - Obtener usuario por ID
- `PUT /users/{id}` - Actualizar usuario
- `DELETE /users/{id}` - Eliminar usuario

#### Eventos

- `POST /eventos` - Crear evento
- `GET /eventos` - Listar eventos
- `GET /eventos/{id}` - Obtener evento por ID
- `PUT /eventos/{id}` - Actualizar evento
- `DELETE /eventos/{id}` - Eliminar evento

## 🗄️ Modelos de Datos

### Usuario

```typescript
{
  _id: ObjectId,
  correo: string,
  contraseña: string (hash),
  createdAt: Date,
  updatedAt: Date
}
```

### Evento

```typescript
{
  _id: ObjectId,
  titulo: string,
  descripcion: string,
  fecha_inicio: Date,
  fecha_fin?: Date,
  tipo_evento: string,
  enlace: string,
  ubicacion?: string,
  organizador?: ObjectId,
  participantes?: ObjectId[],
  estado: "activo" | "cancelado" | "finalizado",
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Configuración de Desarrollo

### ESLint

El proyecto incluye una configuración de ESLint con reglas para TypeScript y React. Para habilitar reglas más estrictas:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Hot Reload

El proyecto está configurado para desarrollo con hot reload tanto en frontend como backend:

- Frontend: Vite HMR
- Backend: ts-node-dev con watch

## 🚢 Despliegue

### Build de Producción

```bash
npm run build
```

### Variables de Entorno para Producción

```env
NODE_ENV=production
MONGODB_URI=<mongodb-production-uri>
PORT=3000
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🔗 Enlaces Útiles

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [TSOA Documentation](https://tsoa-community.github.io/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
