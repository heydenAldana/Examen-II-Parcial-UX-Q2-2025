//  Librerias necearias para el backend 
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbConnector");

// Crear un middleware
app.use(cors());
app.use(express.json());

//--- Las rutas para el servidor (REST API) ---//

// "Devuelve una lista de restaurantes limitada por el limit y offset"
app.get("/restaurants/:limit/:offset", async(req, res) => {
    try {
        const Query = await pool.query("SELECT * FROM restaurants LIMIT $1 OFFSET $2;", [req.params.limit, req.params.offset]);
        res.json(Query.rows);
    } catch (err) {
        console.table(err);
    }
});

/* "Devuelve la disponibilidad de los restaurantes en base a la fecha actual, solamente de fechas futuras.
    Tampoco devuelve las horas que ya han sido reservadas." */
app.get("/restaurants/availability", async(req, res) => {
    try {
        const Query = await pool.query("SELECT * FROM restaurant_availability WHERE schedule_time >= CURRENT_DATE() ORDER BY date ASC;");
        res.json(Query.rows);
    } catch (err) {
        console.table(err);
    }
});

/* Endpoint para reservar un restaurante a una hora especifica.
    Setea en true la columna reserved
    Actualiza la columna reservedBy con el personName
 */
app.put("/restaurants/reserve/:id/:personName/:scheduleTime", async(req, res) => {
    try {
        const { id, personName, scheduleTime } = req.params;
        const Query = await pool.query("UPDATE restaurant_availability SET schedule_time = $1, reserved = true, reservedBy = $2 WHERE id = $3", [scheduleTime, personName, id]);
        res.json(Query.rows);
    } catch (err) {
        console.log(err);
        console.table(err);
    }
});


// Hacer que el server escuche el puerto 5000
app.listen(5000, () => {
    console.log("Si ves esto, El servidor se ha inicializado en el servidor 5000");
});