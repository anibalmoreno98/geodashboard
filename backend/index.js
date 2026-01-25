const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Obtener todos los puntos
app.get("/points", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM points");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error en GET /points");
  }
});

// Crear un punto
app.post("/points", async (req, res) => {
  const { name, lat, lng } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO points (name, lat, lng) VALUES ($1, $2, $3) RETURNING *",
      [name, lat, lng]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error en POST /points");
  }
});

// Actualizar un punto
app.put("/points/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lat, lng } = req.body;
  try {
    const result = await pool.query(
      "UPDATE points SET name=$1, lat=$2, lng=$3 WHERE id=$4 RETURNING *",
      [name, lat, lng, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error en PUT /points/:id");
  }
});

// Borrar un punto
app.delete("/points/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM points WHERE id=$1 RETURNING *",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error en DELETE /points/:id");
  }
});

// Iniciar servidor
app.listen(4000, () => {
  console.log("API escuchando en http://localhost:4000");
});
