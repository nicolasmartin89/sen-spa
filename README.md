

<p align="center">
  <img src="todo-frontend/src/assets/images/LOGOSENSPA.png" alt="Logo de SenSpa" width="600"/>
</p>

# SenSpa - Aplicación Web To-Do List para un Centro Health Spa

## 🌟 1. Introducción

### 🎯 Objetivo:
El objetivo principal de SenSpa es desarrollar una aplicación web de lista de tareas para un centro de Health Spa que ofrece servicios como sauna infrarrojo, sauna a vapor, aromaterapia y terapia con sal. La aplicación permite a los empleados organizar y gestionar eficientemente las tareas operativas diarias, como recibir pedidos de clientes, reservar servicios, registrar métodos de pago, programar citas, asignar empleados, programar la limpieza de áreas y entregar accesorios. Los usuarios pueden agregar nuevas tareas, editar tareas existentes, marcarlas como completadas y eliminarlas de manera eficiente.

## 📝 2. Descripción del Proyecto

###  🔍 2.1 Perspectiva del Producto:
SenSpa es una herramienta de gestión de tareas basada en la web, diseñada para optimizar las operaciones diarias de un centro de Health Spa.

### ⚙️ 2.2 Funcionalidad del Producto:
- Los usuarios podrán categorizar las tareas en "Por Iniciar", "En Progreso" o "Completadas".
- Las tareas se pueden crear, editar, actualizar, marcar como completadas y eliminar.
- El panel de control permitirá a los usuarios visualizar y rastrear las tareas según su categoría.

### 👥 2.3 Características de los Usuarios:
Los principales usuarios serán los empleados del spa que necesitan gestionar sus tareas diarias de manera eficiente.

## 📊 3. Requisitos Específicos

### 🔧 3.1 Requisitos Comunes de Interfaces:

#### 🖥️ 3.1.1 Interfaz de Usuario:
- La aplicación tendrá una interfaz de usuario amigable que permitirá a los empleados navegar y gestionar sus tareas fácilmente.
- **Página Principal**: Un panel de tareas dividido en tres secciones: "Por Iniciar", "En Progreso" y "Completadas".
- **Formulario de Tareas**: Formulario para agregar nuevas tareas con los siguientes campos: nombre de la tarea, descripción, fecha, hora, duración, tipo de servicio y estado de la tarea.
- **Página Secundaria**: Una landing page con información general, servicios y beneficios.

### ⚡3.2 Requisitos Funcionales:

#### 📝 3.2.1 Gestión de Tareas:
- La aplicación permitirá a los usuarios agregar tareas en tres categorías: Por Iniciar, En Progreso y Completadas.

#### ✏️ 3.2.2 Edición de Tareas:
- Los usuarios podrán editar y actualizar tareas existentes.

#### ✅ 3.2.3 Marcado de Tareas:
- Los usuarios podrán marcar tareas como completadas.

#### 🗑️3.2.4 Eliminación de Tareas:
- Los usuarios podrán eliminar tareas.

---

## 🛠️ 4. Tecnologías Utilizadas

### 🔒 Backend
| Tecnología     | Logo                                                                       |
|----------------|----------------------------------------------------------------------------|
| Node.js        | <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" width="50"/>  |
| Express        | <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" width="50"/> |
| SQLite         | <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" alt="SQLite" width="50"/>   |
| Nodemon        | <img src="https://cdn.worldvectorlogo.com/logos/nodemon.svg" alt="Nodemon" width="50"/> |


### 📦 Estructura del Proyecto Backend

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

### 💻 Instalación (Backend)
git clone <URL del repositorio>
cd senSpa-backend
npm install
### 🚀 Uso (Backend)
npm run dev
#### Servidor en http://localhost:3000

### 🎨 Frontend
| Tecnología     | Logo                                                                       |
|----------------|----------------------------------------------------------------------------|
| React          | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="50"/>     |
| Vite           | <img src="https://vitejs.dev/logo.svg" alt="Vite" width="50"/>       |
| Tailwind CSS   | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width="50"/> |
| JavaScript     | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="50"/> |


### 📂 Estructura del Proyecto Frontend
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

### 🔧 Instalación (Frontend)
git clone <URL del repositorio>
cd senSpa-frontend
npm install

### 🚀 Uso (Frontend)
npm run dev
#### Aplicación en http://localhost:5173
