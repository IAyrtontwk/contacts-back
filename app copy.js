console.log('Hola mundo')

// importamos dotenv
require('dotenv').config();

//importamos cors
const cors = require('cors');

// importamos express
const express = require('express');

//Importamos el archivo que tiene la conexión
const {stringConnection} = require('./database/config');

//creamos el servidor de express
const app = express();
// app.listen(3000, () => {
// console.log('El servidor esta corriendo en el puerto: ' + 3000)
// });

//El primer argumento es el path o la ruta, el segundo es el callback que ejecutara
// app.get('/', (req, res) => {

// // Como argumentos de entrada tendremos lo solicitado como request(req), y lo
// // que se respondera como response(res), con res enviaremos una respuesta en forma
// // de json al cliente.
// res.json({
// ok: true,
// msg: 'Hola Mundo'
// })
// });
// app.listen(3000, () => {
// console.log('El servidor esta corriendo en el puerto: ' + 3000)
// });
app.use(cors());
//implementamos mediante middleware el uso de cors

stringConnection();
//Iniciamos la Base de datos
app.get('/', (req, res) => {
res.json({
ok: true,
msg: 'Hola Mundo'
})
});

//aplicamos la variable de PORT
app.listen(process.env.PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ' + process.env.PORT)
});
