var ResultadoAlgebra = require('../Models/ResultadosAlgebra');
var ResultadoAnatomia = require('../Models/ResultadosAnatomia');
var ResultadoAritmetica = require('../Models/ResultdadosAritmetica');
var User = require('../Models/User');

//USER

//Álgebra
const registro_resultado_practicas_algebra = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadoAlgebra.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_algebra = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadoAlgebra.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Anatomía
const registro_resultado_practicas_anatomia = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadoAnatomia.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_anatomia = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadoAnatomia.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//ritmética
const registro_resultado_practicas_aritmetica = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadoAritmetica.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_aritmetica = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadoAritmetica.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}


module.exports = {
    registro_resultado_practicas_algebra,
    obtener_resultado_practicas_algebra,

    registro_resultado_practicas_anatomia,
    obtener_resultado_practicas_anatomia,

    registro_resultado_practicas_aritmetica,
    obtener_resultado_practicas_aritmetica,
}