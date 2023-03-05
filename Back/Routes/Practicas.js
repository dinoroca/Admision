'use strict';

var express = require('express');
var resultadoPracticasController = require('../Controllers/ResultadoPracticasController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

//Álgebra
api.post('/registro_resultado_practicas_algebra', auth.auth, resultadoPracticasController.registro_resultado_practicas_algebra);
api.get('/obtener_resultado_practicas_algebra/:id', auth.auth, resultadoPracticasController.obtener_resultado_practicas_algebra);

//Anatomía
api.post('/registro_resultado_practicas_anatomia', auth.auth, resultadoPracticasController.registro_resultado_practicas_anatomia);
api.get('/obtener_resultado_practicas_anatomia/:id', auth.auth, resultadoPracticasController.obtener_resultado_practicas_anatomia);

//Aritmética
api.post('/registro_resultado_practicas_aritmetica', auth.auth, resultadoPracticasController.registro_resultado_practicas_aritmetica);
api.get('/obtener_resultado_practicas_aritmetica/:id', auth.auth, resultadoPracticasController.obtener_resultado_practicas_aritmetica);

module.exports = api;