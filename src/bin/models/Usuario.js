const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre1: String,
  nombre2: String,
  apellido1: String,
  apellido2: String,
  observaciones:String,
  fecha_nacimiento: Date,
  correo_acudiente:String,

});

var Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;
