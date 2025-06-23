// Parametro necesario por usar Postgres
const Pool = require("pg").Pool;

// Crear instancia de conexion con parametros de conexion
const pool = new Pool({
    database: "Restaurant",
    user: "postgres",
    password: "123",
    host: "localhost",
    port: 5432,
});

// Exportar el modulo del conector de la DB
module.exports = pool;