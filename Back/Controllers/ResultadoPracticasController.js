var ResultadoAlgebra = require('../Models/ResultadosAlgebra');
var ResultadoAnatomia = require('../Models/ResultadosAnatomia');
var ResultadoAritmetica = require('../Models/ResultdadosAritmetica');
var ResultadosBiologia = require('../Models/ResultadosBiologia');
var ResultadosEconomia = require('../Models/ResultadosEconomia');
var ResultadosEdCivica = require('../Models/ResultadosEdCivica');
var ResultadosFisica = require('../Models/ResultadosFisica');
var ResultadosGeografia = require('../Models/ResultadosGeografia');
var ResultadosGeometria = require('../Models/ResultadosGeometria');
var ResultadosHistoriaPeru = require('../Models/ResultadosHistoriaPeru');
var ResultadosHistoriaUniversal = require('../Models/ResultadosHistoriaUniversal');
var ResultadosLenguaje = require('../Models/ResultadosLenguaje');
var ResultadosLiteratura = require('../Models/ResultadosLiteratura');
var ResultadosQuimica = require('../Models/ResultadosQuimica');
var ResultadosRazMatematico = require('../Models/ResultadosRazMatematico');
var ResultadosRazVerbal = require('../Models/ResultadosRazVerbal');
var ResultadosTrigonometria = require('../Models/ResultadosTrigonometria');
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

//Aritmética
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

//Biología
const registro_resultado_practicas_biologia = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosBiologia.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_biologia = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosBiologia.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Economía
const registro_resultado_practicas_economia = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosEconomia.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_economia = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosEconomia.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Educación Cívica
const registro_resultado_practicas_ed_civica = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosEdCivica.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_ed_civica = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosEdCivica.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Física
const registro_resultado_practicas_fisica = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosFisica.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_fisica = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosFisica.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Geografía
const registro_resultado_practicas_geografia = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosGeografia.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_geografia = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosGeografia.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Geometría
const registro_resultado_practicas_geometria = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosGeometria.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_geometria = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosGeometria.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Historia del Perú
const registro_resultado_practicas_historia_peru = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosHistoriaPeru.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_historia_peru = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosHistoriaPeru.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Historia Universal
const registro_resultado_practicas_historia_universal = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosHistoriaUniversal.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_historia_universal = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosHistoriaUniversal.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Lenguaje
const registro_resultado_practicas_lenguaje = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosLenguaje.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_lenguaje = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosLenguaje.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Literatura
const registro_resultado_practicas_literatura = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosLiteratura.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_literatura = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosLiteratura.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Química
const registro_resultado_practicas_quimica = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosQuimica.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_quimica = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosQuimica.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Razonamiento Matemático
const registro_resultado_practicas_raz_matematico = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosRazMatematico.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_raz_matematico = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosRazMatematico.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Razonamiento Verbal
const registro_resultado_practicas_raz_verbal = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosRazVerbal.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_raz_verbal = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosRazVerbal.find({ user: id }).sort({ createdAt: 1 });
        if (reg.length >= 1) {
          res.status(200).send({ data: reg });
    
        } else if (reg.length == 0) {
          res.status(200).send({ data: undefined });
        }
    
      } else {
        res.status(500).send({ message: 'NoAccess' });
      }
}

//Trigonometría
const registro_resultado_practicas_trigonometria = async function (req, res) {
    if (req.user) {
        var data = req.body;
        let reg = await ResultadosTrigonometria.create(data);

        res.status(200).send({ data: reg });
    }else {
        res.status(500).send({ message: 'NoAccess' });
    }
}

const obtener_resultado_practicas_trigonometria = async function (req, res) {
    if (req.user) {
        var id = req.params['id'];
    
        var reg = await ResultadosTrigonometria.find({ user: id }).sort({ createdAt: 1 });
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

    registro_resultado_practicas_biologia,
    obtener_resultado_practicas_biologia,

    registro_resultado_practicas_economia,
    obtener_resultado_practicas_economia,

    registro_resultado_practicas_ed_civica,
    obtener_resultado_practicas_ed_civica,

    registro_resultado_practicas_fisica,
    obtener_resultado_practicas_fisica,

    registro_resultado_practicas_geografia,
    obtener_resultado_practicas_geografia,

    registro_resultado_practicas_geometria,
    obtener_resultado_practicas_geometria,

    registro_resultado_practicas_historia_peru,
    obtener_resultado_practicas_historia_peru,

    registro_resultado_practicas_historia_universal,
    obtener_resultado_practicas_historia_universal,

    registro_resultado_practicas_lenguaje,
    obtener_resultado_practicas_lenguaje,

    registro_resultado_practicas_literatura,
    obtener_resultado_practicas_literatura,

    registro_resultado_practicas_quimica,
    obtener_resultado_practicas_quimica,

    registro_resultado_practicas_raz_matematico,
    obtener_resultado_practicas_raz_matematico,

    registro_resultado_practicas_raz_verbal,
    obtener_resultado_practicas_raz_verbal,

    registro_resultado_practicas_trigonometria,
    obtener_resultado_practicas_trigonometria
}