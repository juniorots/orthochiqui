var mongoose = require('mongoose');
 
var pacienteSchema = new mongoose.Schema({
  nome: String,
  prontuario: String,
  telefone: {type: Number, default: 0},
});
 
mongoose.model('paciente', pacienteSchema);
