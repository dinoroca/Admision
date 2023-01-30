'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PagoSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'user', required: true},
    npago: {type: Number, required: true},
    subtotal: {type: Number, required: true},
    transaccion: {type: String, required: true},
    estado: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('pago', PagoSchema);