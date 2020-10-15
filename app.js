var express  = require('express');
var app      = express();

// mongoose for mongodb
var mongoose = require('mongoose');

// solicitações para log no console (express4)
var logger = require('morgan');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
 
 
// MONGODB ============================================
mongoose.connect('mongodb://127.0.0.1/dados');
require('./models/colaborador');
require('./models/paciente');
 
 
// DEFININDO A APLICAÇÃO ==============================
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
 
 
// ROTAS ===============================================
var index = require('./routes/index');
app.use('/', index);
 
 
// LISTEN (iniciando nossa aplicação em node) ==========
app.listen(8181);
console.log("Aplicação executada na porta 8181");
