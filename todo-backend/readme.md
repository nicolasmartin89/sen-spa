# SenSpa - Backend 💻

## Descripción

SenSpa es una herramienta de lista de tareas basada en la web diseñada para optimizar las operaciones diarias de un centro de Health Spa. Este repositorio contiene el backend de la aplicación, desarrollado con Node.js y Express, utilizando una base de datos SQLite para el almacenamiento persistente de datos.

## Funcionalidades

- Gestión de tareas: permite a los usuarios crear, editar, actualizar, marcar como completadas y eliminar tareas.
- Clasificación de tareas en categorías: "Por iniciar", "En progreso" y "Completadas".
- Interfaz RESTful para interactuar con el sistema de gestión de tareas.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para construir aplicaciones web y APIs.
- **SQLite**: Base de datos ligera para almacenamiento persistente de datos.
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

## Estructura del proyecto

senSpa-backend

- /db # Carpeta que contiene la base de datos
  -- database.sqlite # Archivo de base de datos SQLite -
- /routes # Rutas de la aplicación
  -- taskRoutes.js # Rutas para gestionar tareas
- /services # Servicios para la lógica de negocio
  -- taskService.js # Servicios para la gestión de tareas
- /controllers # Controladores de la aplicación
  -- taskController.js # Controlador para gestionar las tareas
- .env # Variables de entorno
- package.json #Archivos de configuración de nodejs y express.

## Instalación

1. Clona el repositorio:
   `bash git clone <URL del repositorio>
 cd senSpa-backend`
2. Instala dependencias:
   `npm install`

## Uso

1. Ejecuta la aplicación:
   `npm run dev`

El servidor se ejecutará en `http://localhost:3000`
