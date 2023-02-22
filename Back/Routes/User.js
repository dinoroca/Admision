'use strict';

var express = require('express');
var UserController = require('../Controllers/UserController');
var api = express.Router();
var auth = require('../middlewares/authenticate');

//Peticiones
api.post('/registro_user', UserController.registro_user);
api.post('/login_user', UserController.login_user);
api.get('/obtener_user/:id', auth.auth, UserController.obtener_user);
api.get('/obtener_user_admin/:id', auth.auth, UserController.obtener_user_admin);
api.get('/listar_usuarios_filtro_admin/:filtro?', auth.auth, UserController.listar_usuarios_filtro_admin);
api.put('/actualizar_user_admin/:id', auth.auth, UserController.actualizar_user_admin);
api.delete('/eliminar_user_admin/:id', auth.auth, UserController.eliminar_user_admin);


//Exportar los módulos
module.exports = api;