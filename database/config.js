const mongoose = require('mongoose');

const stringConnection = async() => {
try {
    //aplicamos la variable DB_CNN
    await mongoose.connect(process.env.DB_CNN);
    console.log('Conexión exitosa');
    //Anterior
    // await mongoose.connect('mongodb+srv://<user>:<pass>@cluster0.ulv0q.mongodb.net/test');
        } catch (error) {
                console.log(error);
                throw new Error('Fallo la conexion');
        }
    }
module.exports = {
    stringConnection
}