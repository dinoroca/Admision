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

const obtener_pregunta_algebra = async function (req, res) {
    if (req.user) {
        if (req.user.role == 'ADMIN') {

            var id = req.params['id'];

            try {
                var reg = await Algebra.findById({ _id: id });
                res.status(200).send({ data: reg });

            } catch (error) {
                res.status(200).send({ data: undefined });
            }

        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const actualizar_pregunta_algebra = async function (req, res) {
    if (req.user) {
        if (req.user.role == 'ADMIN') {

            var id = req.params['id'];
            var data = req.body;

            var reg = await Algebra.findByIdAndUpdate({ _id: id }, {
                pregunta: data.pregunta,
                alt_a: data.alt_a,
                alt_b: data.alt_b,
                alt_c: data.alt_c,
                alt_d: data.alt_d,
                alt_e: data.alt_e
            });

            res.status(200).send({ data: reg });

        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const eliminar_pregunta_algebra = async function (req, res) {
    if (req.user) {
        if (req.user.role === 'ADMIN') {

            var id = req.params['id'];
            let reg = await Algebra.findByIdAndRemove({ _id: id });
            res.status(200).send({ data: reg });

        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

module.exports = {
    agregar_pregunta_algebra,
    listar_preguntas_filtro_algebra,
    obtener_pregunta_algebra,
    actualizar_pregunta_algebra,
    eliminar_pregunta_algebra
}