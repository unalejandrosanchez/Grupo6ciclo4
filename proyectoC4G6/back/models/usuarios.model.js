const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario:    {type: String, required: true,  max:100},
    pass:   {type: String, required: true,  max:128} //SIEMPRE debe ser 128 por la encriptacion.
});

module.exports = mongoose.model("usuarios", usuarioSchema);