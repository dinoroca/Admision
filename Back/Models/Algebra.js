'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlgebraSchema = Schema({
    pregunta: {type: String, required: true},
    imagen: {type: String, default: 'Imagen.png', required: false},
    alt_a: {type: String, required: true},
    alt_b: {type: String, required: true},
    alt_c: {type: String, required: true},
    alt_d: {type: String, required: true},
    alt_e: {type: String, required: true},
});

module.exports = mongoose.model('algebra', AlgebraSchema);