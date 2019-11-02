var mongoose = require('mongoose');
 
var colaboradorSchema = new mongoose.Schema({
  nome: String,
  cro: String,
  funcao: String,
  telefone: {type: Number, default: 0}
});
 
mongoose.model('colaborador', colaboradorSchema);
