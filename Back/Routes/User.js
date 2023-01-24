'use strict';

var express = require('express');
var UserController = require('../Controllers/UserController');
var api = express.Router();

//Peticiones
api.post('/registro_user', UserController.registro_user);
api.post('/login_user', UserController.login_user);


//Exportar los módulos
module.exports = api;