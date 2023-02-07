'use strict';

var Algebra = require('../Models/Algebra');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const agregar_pregunta_algebra = async function (req, res) {

    if (req.user) {
        if (req.user.role == 'ADMIN') {
            let data = req.body;

            let reg = await Algebra.create(data);

            res.status(200).send({ data: reg });
        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const listar_preguntas_filtro_algebra = async function (req, res) {

    if (req.user) {
        if (req.user.role == 'ADMIN') {

            let filtro = req.params["filtro"];

            console.log(filtro);

            if (filtro == null || filtro == "null") {
                let reg = await Algebra.find();
                res.status(200).send({ data: reg });

            } else if (filtro == "pregunta") {
                let reg = await Algebra.find({ pregunta: new RegExp(filtro, "i") });
                res.status(200).send({ data: reg });
            }
        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
};

module.exports = {
    agregar_pregunta_algebra,
    listar_preguntas_filtro_algebra
}