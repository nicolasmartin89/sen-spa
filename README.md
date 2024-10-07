# SenSpa - Aplicación Web To-Do List para un Centro Health Spa

## 1. Introducción

### Objetivo:
El objetivo principal de SenSpa es desarrollar una aplicación web de lista de tareas para un centro de Health Spa que ofrece servicios como sauna infrarrojo, sauna a vapor, aromaterapia y terapia con sal. La aplicación permite a los empleados organizar y gestionar eficientemente las tareas operativas diarias, como recibir pedidos de clientes, reservar servicios, registrar métodos de pago, programar citas, asignar empleados, programar la limpieza de áreas y entregar accesorios. Los usuarios pueden agregar nuevas tareas, editar tareas existentes, marcarlas como completadas y eliminarlas de manera eficiente.

### Tecnologías:
- **Backend**: Node.js, Express, SQLite, Nodemon
- **Frontend**: React, Vite, Tailwind CSS, JavaScript

## 2. Descripción del Proyecto

### 2.1 Perspectiva del Producto:
SenSpa es una herramienta de gestión de tareas basada en la web, diseñada para optimizar las operaciones diarias de un centro de Health Spa.

### 2.2 Funcionalidad del Producto:
- Los usuarios podrán categorizar las tareas en "Por Iniciar", "En Progreso" o "Completadas".
- Las tareas se pueden crear, editar, actualizar, marcar como completadas y eliminar.
- El panel de control permitirá a los usuarios visualizar y rastrear las tareas según su categoría.

### 2.3 Características de los Usuarios:
Los principales usuarios serán los empleados del spa que necesitan gestionar sus tareas diarias de manera eficiente.

## 3. Requisitos Específicos

### 3.1 Requisitos Comunes de Interfaces:

#### 3.1.1 Interfaz de Usuario:
- La aplicación tendrá una interfaz de usuario amigable que permitirá a los empleados navegar y gestionar sus tareas fácilmente.
- **Página Principal**: Un panel de tareas dividido en tres secciones: "Por Iniciar", "En Progreso" y "Completadas".
- **Formulario de Tareas**: Formulario para agregar nuevas tareas con los siguientes campos: nombre de la tarea, descripción, fecha, hora, duración, tipo de servicio y estado de la tarea.
- **Página Secundaria**: Una landing page con información general, servicios y beneficios.

### 3.2 Requisitos Funcionales:

#### 3.2.1 Gestión de Tareas:
- La aplicación permitirá a los usuarios agregar tareas en tres categorías: Por Iniciar, En Progreso y Completadas.

#### 3.2.2 Edición de Tareas:
- Los usuarios podrán editar y actualizar tareas existentes.

#### 3.2.3 Marcado de Tareas:
- Los usuarios podrán marcar tareas como completadas.

#### 3.2.4 Eliminación de Tareas:
- Los usuarios podrán eliminar tareas.

---

## 4. Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express**: Framework web para construir APIs y aplicaciones web.
- **SQLite**: Base de datos ligera para almacenamiento persistente de datos.
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

### Estructura del Proyecto Backend

senSpa-backend/
├── db/
│   └── database.sqlite
├── routes/
│   └── taskRoutes.js
├── services/
│   └── taskService.js
├── controllers/
│   └── taskController.js
├── .env
└── package.json

### Instalación (Backend)
git clone <URL del repositorio>
cd senSpa-backend
npm install
### Uso (Backend)
npm run dev
#### Servidor en http://localhost:3000

### Frontend
- **Vite**: Vite: Herramienta de construcción.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**:  Framework CSS basado en utilidades para crear diseños personalizados y responsivos.
- **JavaScript**: Lenguaje de programación utilizado en la construcción de la aplicación.

### Estructura del Proyecto Frontend
senSpa-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
└── package.json

### Instalación (Frontend)
git clone <URL del repositorio>
cd senSpa-frontend
npm install

### Uso (Frontend)
npm run dev
#### Aplicación en http://localhost:5173
