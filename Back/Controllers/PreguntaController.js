'use strict';

var Algebra = require('../Models/Algebra');
var Anatomia = require('../Models/Anatomia');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

//Álgebra

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

            let filtro = req.params['filtro'];

            let reg = await Algebra.find({ pregunta: new RegExp(filtro, 'i') });
            res.status(200).send({ data: reg });
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
                alt_e: data.alt_e,
                solucionario: data.solucionario
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

// Usuario
const obtener_preguntas_practica_algebra = async function (req, res) {
    if (req.user) {
        let reg = await Algebra.aggregate([{$sample: {size: 10}}]);
        res.status(200).send({ data: reg });
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

//Anatomía

const agregar_pregunta_anatomia = async function (req, res) {

    if (req.user) {
        if (req.user.role == 'ADMIN') {
            let data = req.body;

            let reg = await Anatomia.create(data);

            res.status(200).send({ data: reg });
        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const listar_preguntas_filtro_anatomia = async function (req, res) {

    if (req.user) {
        if (req.user.role == 'ADMIN') {

            let filtro = req.params['filtro'];

            let reg = await Anatomia.find({ pregunta: new RegExp(filtro, 'i') });
            res.status(200).send({ data: reg });
        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
};

const obtener_pregunta_anatomia = async function (req, res) {
    if (req.user) {
        if (req.user.role == 'ADMIN') {

            var id = req.params['id'];

            try {
                var reg = await Anatomia.findById({ _id: id });
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

const actualizar_pregunta_anatomia = async function (req, res) {
    if (req.user) {
        if (req.user.role == 'ADMIN') {

            var id = req.params['id'];
            var data = req.body;

            var reg = await Anatomia.findByIdAndUpdate({ _id: id }, {
                pregunta: data.pregunta,
                alt_a: data.alt_a,
                alt_b: data.alt_b,
                alt_c: data.alt_c,
                alt_d: data.alt_d,
                alt_e: data.alt_e,
                solucionario: data.solucionario
            });

            res.status(200).send({ data: reg });

        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const eliminar_pregunta_anatomia = async function (req, res) {
    if (req.user) {
        if (req.user.role === 'ADMIN') {

            var id = req.params['id'];
            let reg = await Anatomia.findByIdAndRemove({ _id: id });
            res.status(200).send({ data: reg });

        } else {
            res.status(500).send({ message: 'NoAccess' });
        }
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

// Usuario
const obtener_preguntas_practica_anatomia = async function (req, res) {
    if (req.user) {
        let reg = await Anatomia.aggregate([{$sample: {size: 10}}]);
        res.status(200).send({ data: reg });
    } else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

module.exports = {
    agregar_pregunta_algebra,
    listar_preguntas_filtro_algebra,
    obtener_pregunta_algebra,
    actualizar_pregunta_algebra,
    eliminar_pregunta_algebra,

    obtener_preguntas_practica_algebra,

    agregar_pregunta_anatomia,
    listar_preguntas_filtro_anatomia,
    obtener_pregunta_anatomia,
    actualizar_pregunta_anatomia,
    eliminar_pregunta_anatomia,

    obtener_preguntas_practica_anatomia
}