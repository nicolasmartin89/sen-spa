require("dotenv").config();
const express = require("express");
const { initializeDatabase } = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Inicializar la base de datos
initializeDatabase();

// Configurar rutas
app.use("/api/tasks", taskRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
