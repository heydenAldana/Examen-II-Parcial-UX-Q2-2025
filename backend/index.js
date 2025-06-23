//  Librerias necearias para el backend 
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbConnector");

// Crear un middleware
app.use(cors());
app.use(express.json());

//--- Las rutas para el servidor (REST API) ---//

// Hacer que el server escuche el puerto 5000
app.listen(5000, () => {
    console.log("Si ves esto, El servidor se ha inicializado en el servidor 5000");
});