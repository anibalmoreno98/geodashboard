const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "db", // nombre del servicio en docker-compose
  database: "geodashboard",
  password: "1234",
  port: 5432,
});

module.exports = { pool };
