var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var colaborador = mongoose.model('colaborador');
var paciente = mongoose.model('paciente');

/**
* SECAO COLABORADOR
*/
router.get('/api/colaborador', function(req, res) {
    Contato.find(function(err, colaborador) {
        if (err)
            res.send(err)
        res.json(colaborador); 
    });
});
 
router.post('/api/colaborador', function(req, res) {
    colaborador.create({
        nome : req.body.nome,
        cro : req.body.cro,
        funcao : req.body.funcao,
        telefone : req.body.telefone,
        done : false
    }, function(err, colaborador) {
        if (err)
            res.send(err);
        colaborador.find(function(err, colaborador) {
            if (err)
                res.send(err)
            res.json(colaborador);
        });
    });
 
});
 
router.delete('/api/colaborador/:colaborador_id', function(req, res) {
    colaborador.remove({
        _id : req.params.colaborador_id
    }, function(err, colaborador) {
        if (err)
            res.send(err);
        colaborador.find(function(err, colaborador) {
            if (err)
                res.send(err)
            res.json(colaborador);
        });
    });
});
 
router.get('/api/colaborador/:colaborador_id', function(req, res) {
    colaborador.findOne({
        _id : req.params.colaborador_id
    }, function(err, colaborador) {
        if (err)
            res.send(err);
        res.json(colaborador);
    });
});
 
router.put('/api/colaborador/:colaborador_id', function(req, res) {
    var colaboradorData = req.body;
    var id = req.params.colaborador_id;
 
    colaborador.update( 
        {_id: id }, 
        colaboradorData, 
        { upsert: true}, 
        function(err, colaborador) {
            if (err) res.send(err);
            res.json(colaborador);
    });
    
});

/**
* SECAO PACIENTE
*/
router.get('/api/paciente', function(req, res) {
    Contato.find(function(err, paciente) {
        if (err)
            res.send(err)
        res.json(paciente); 
    });
});
 
router.post('/api/paciente', function(req, res) {
    paciente.create({
        nome : req.body.nome,
        cro : req.body.cro,
        funcao : req.body.funcao,
        telefone : req.body.telefone,
        done : false
    }, function(err, paciente) {
        if (err)
            res.send(err);
        paciente.find(function(err, paciente) {
            if (err)
                res.send(err)
            res.json(paciente);
        });
    });
 
});
 
router.delete('/api/paciente/:paciente_id', function(req, res) {
    paciente.remove({
        _id : req.params.paciente_id
    }, function(err, paciente) {
        if (err)
            res.send(err);
        paciente.find(function(err, paciente) {
            if (err)
                res.send(err)
            res.json(paciente);
        });
    });
});
 
router.get('/api/paciente/:paciente_id', function(req, res) {
    paciente.findOne({
        _id : req.params.paciente_id
    }, function(err, paciente) {
        if (err)
            res.send(err);
        res.json(paciente);
    });
});
 
router.put('/api/paciente/:paciente_id', function(req, res) {
    var pacienteData = req.body;
    var id = req.params.paciente_id;
 
    paciente.update( 
        {_id: id }, 
        pacienteData, 
        { upsert: true}, 
        function(err, paciente) {
            if (err) res.send(err);
            res.json(paciente);
    });
    
});
 
router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
 
module.exports = router;
