const express = require("express");
const cors = require("cors");
const { pool } = require("./db");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET: listar telepuertos
app.get("/points", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, lat, lng, status, type FROM telepuertos ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error en GET /points:", err);
    res.status(500).json({ error: "Error obteniendo telepuertos" });
  }
});

// POST: crear telepuerto
app.post("/points", async (req, res) => {
  try {
    const { name, lat, lng, status, type } = req.body;

    const result = await pool.query(
      "INSERT INTO telepuertos (name, lat, lng, status, type) VALUES ($1,$2,$3,$4,$5) RETURNING id, name, lat, lng, status, type",
      [name, lat, lng, status, type]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error en POST /points:", err);
    res.status(500).json({ error: "Error creando telepuerto" });
  }
});

// DELETE: eliminar telepuerto
app.delete("/points/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM telepuertos WHERE id = $1", [id]);

    res.json({ message: "Telepuerto eliminado" });
  } catch (err) {
    console.error("Error en DELETE /points/:id:", err);
    res.status(500).json({ error: "Error eliminando telepuerto" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://0.0.0.0:${PORT}`);
});
