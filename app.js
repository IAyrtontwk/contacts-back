require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {stringConnection} = require('./database/config');
const app = express();
app.use(cors());
app.use(express.json());
stringConnection();
//Rutas
app.use('/api/user', require('./routes/user.route'));
app.use('/api/contact', require('./routes/contact.route'));


app.listen(process.env.PORT, () => {
console.log('El servidor esta corriendo en el puerto: ' + process.env.PORT)
});
