const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "geodashboard",
  password: "1234",
  port: 5432
});

// Endpoint GET /points
app.get("/points", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM points");
    res.json(result.rows);
  } catch (err) {
    console.error("Error en /points:", err);
    res.status(500).send("Error en el servidor");
  }
});

// Iniciar servidor
app.listen(4000, () => {
  console.log("API escuchando en http://localhost:4000");
});
