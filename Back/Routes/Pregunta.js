'use strict';

var express = require('express');
var PreguntaController = require('../Controllers/PreguntaController');
var api = express.Router();
var auth = require('../middlewares/authenticate');

//Peticiones
api.post('/agregar_pregunta_algebra', auth.auth, PreguntaController.agregar_pregunta_algebra);
api.get('/listar_preguntas_filtro_algebra/:filtro?', auth.auth, PreguntaController.listar_preguntas_filtro_algebra);
api.get('/obtener_pregunta_algebra/:id', auth.auth, PreguntaController.obtener_pregunta_algebra);
api.put('/actualizar_pregunta_algebra/:id', auth.auth, PreguntaController.actualizar_pregunta_algebra);
api.delete('/eliminar_pregunta_algebra/:id', auth.auth, PreguntaController.eliminar_pregunta_algebra);

//Exportar los módulos
module.exports = api;