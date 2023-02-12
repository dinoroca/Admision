'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlgebraSchema = Schema({
    pregunta: {type: String, required: true},
    alt_a: [{
        type: mongoose.Schema.Types.Mixed,
      }],
    alt_b: [{
        type: mongoose.Schema.Types.Mixed,
      }],
    alt_c: [{
        type: mongoose.Schema.Types.Mixed,
      }],
    alt_d: [{
        type: mongoose.Schema.Types.Mixed,
      }],
    alt_e: [{
        type: mongoose.Schema.Types.Mixed,
      }],

    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('algebra', AlgebraSchema);