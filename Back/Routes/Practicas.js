'use strict';

var express = require('express');
var resultadoPracticasController = require('../controllers/ResultadoPracticasController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/registro_resultado_practicas_algebra', auth.auth, resultadoPracticasController.registro_resultado_practicas_algebra);
api.get('/obtener_resultado_practicas_algebra/:id', auth.auth, resultadoPracticasController.obtener_resultado_practicas_algebra);

module.exports = api;