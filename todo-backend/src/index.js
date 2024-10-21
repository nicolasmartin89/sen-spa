require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS para permitir solicitudes desde tu frontend en Vercel
const corsOptions = {
  origin: "https://todo-frontend-three-dusky.vercel.app", // Tu URL del frontend en Vercel
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
  allowedHeaders: [
    "Authorization",
    "X-API-KEY",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Access-Control-Allow-Request-Method",
  ],
  credentials: true, // Si es necesario compartir cookies o tokens
};

app.use(cors(corsOptions));
app.use(express.json());

// Inicializar la base de datos
initializeDatabase();

// Configurar rutas
app.use("/api/tasks", taskRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
