const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { DATABASE_URL } = process.env;

const DB_PATH = path.resolve(__dirname, "database.sqlite");

//DATABASE_URL (Modificar esto por DB_PATH para trabajar en memory.)
//DB_PATH (Utilizar para guardar una copia en local.)

const db = new sqlite3.Database(DATABASE_URL, (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
    throw err;
  }
  console.log("Conectado a la base de datos SQLite");
});

const initializeDatabase = () => {
  const createTasksTable = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      date TEXT,
      time TEXT,
      duration INTEGER,
      type TEXT,
      status TEXT
    )
  `;

  db.run(createTasksTable, (err) => {
    if (err) {
      console.error("Error al crear la tabla tasks:", err.message);
      throw err;
    }
    console.log("Tabla tasks creada o ya existe");
  });
};

module.exports = {
  db,
  initializeDatabase,
};
