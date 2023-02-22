'use strict';

var express = require('express');
var PreguntaController = require('../Controllers/PreguntaController');
var api = express.Router();
var auth = require('../middlewares/authenticate');

//Peticiones
//Álgebra
api.post('/agregar_pregunta_algebra', auth.auth, PreguntaController.agregar_pregunta_algebra);
api.get('/listar_preguntas_filtro_algebra/:filtro?', auth.auth, PreguntaController.listar_preguntas_filtro_algebra);
api.get('/obtener_pregunta_algebra/:id', auth.auth, PreguntaController.obtener_pregunta_algebra);
api.put('/actualizar_pregunta_algebra/:id', auth.auth, PreguntaController.actualizar_pregunta_algebra);
api.delete('/eliminar_pregunta_algebra/:id', auth.auth, PreguntaController.eliminar_pregunta_algebra);

//Anatomía
api.post('/agregar_pregunta_anatomia', auth.auth, PreguntaController.agregar_pregunta_anatomia);
api.get('/listar_preguntas_filtro_anatomia/:filtro?', auth.auth, PreguntaController.listar_preguntas_filtro_anatomia);
api.get('/obtener_pregunta_anatomia/:id', auth.auth, PreguntaController.obtener_pregunta_anatomia);
api.put('/actualizar_pregunta_anatomia/:id', auth.auth, PreguntaController.actualizar_pregunta_anatomia);
api.delete('/eliminar_pregunta_anatomia/:id', auth.auth, PreguntaController.eliminar_pregunta_anatomia);

//Exportar los módulos
module.exports = api;