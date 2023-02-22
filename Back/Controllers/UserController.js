'use strict';

var User = require('../Models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_user = async function (req, res) {
  //Obtiene los parámetros del cliente
  var data = req.body;
  var users_arr = [];

  //Verifica que no exista correo repetido
  users_arr = await User.find({ email: data.email });

  if (users_arr.length == 0) {
    //Registro del usuario

    if (data.password) {
      bcrypt.hash(data.password, null, null, async function (err, hash) {
        if (hash) {
          data.password = hash;
          var reg = await User.create(data);
          res.status(200).send({
            data: reg,
            token: jwt.createToken(reg)
          });
        } else {
          res.status(200).send({ message: "Error server", data: undefined });
        }
      });
    } else {
      res
        .status(200)
        .send({ message: "No hay una contraseña", data: undefined });
    }
  } else {
    res
      .status(200)
      .send({
        message: "El correo ya existe en la Base de Datos",
        data: undefined,
      });
  }
}

const login_user = async function (req, res) {
  var data = req.body;
  var users_arr = [];

  //Busca un cliente mediante el correo
  users_arr = await User.find({ email: data.email });

  if (users_arr.length == 0) {
    res
      .status(200)
      .send({ message: "Correo o contraseña incorrectos", data: undefined });
  } else {
    //Si existe el cliente se manda al login
    let user = users_arr[0];

    //Comparar contraseñas
    bcrypt.compare(data.password, user.password, async function (error, check) {
      if (check) {
        res.status(200).send({
          data: user,
          token: jwt.createToken(user),
        });
      } else {
        res
          .status(200)
          .send({ message: "Correo o contraseña incorrectos", data: undefined });
      }
    });
  }
}

const obtener_user = async function (req, res) {
  if (req.user) {

    var id = req.params['id'];

    try {
      var reg = await User.findById({ _id: id });
      res.status(200).send({ data: reg });

    } catch (error) {
      res.status(200).send({ data: undefined });
    }

  } else {
    res.status(500).send({ message: 'NoAccess' });
  }
}

const obtener_user_admin = async function (req, res) {
  if (req.user) {
    if (req.user.role == 'ADMIN') {

      var id = req.params['id'];

      try {
        var reg = await User.findById({ _id: id });
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

const listar_usuarios_filtro_admin = async function (req, res) {

  if (req.user) {
    if (req.user.role == 'ADMIN') {

      let filtro = req.params['filtro'];

      let reg = await User.find({ nombres: new RegExp(filtro, 'i') });
      res.status(200).send({ data: reg });
    } else {
      res.status(500).send({ message: 'NoAccess' });
    }
  } else {
    res.status(500).send({ message: 'NoAccess' });
  }
};

const actualizar_user_admin = async function (req, res) {
  if (req.user) {
    if (req.user.role == 'ADMIN') {

      var id = req.params['id'];
      var data = req.body;

      if (data.password.length < 30) {
        bcrypt.hash(data.password, null, null, async function (err, hash) {
          if (hash) {
            var reg = await User.findByIdAndUpdate({ _id: id }, {
              nombres: data.nombres,
              apellidos: data.apellidos,
              email: data.email,
              password: hash,
              telefono: data.telefono,
              f_nacimiento: data.f_nacimiento,
              dni: data.dni,
              genero: data.genero,
              role: data.role
            });

            res.status(200).send({ data: reg });

          } else {
            res.status(200).send({ message: "Error server", data: undefined });
          }
        });
      } else {
        var reg = await User.findByIdAndUpdate({ _id: id }, {
          nombres: data.nombres,
          apellidos: data.apellidos,
          email: data.email,
          telefono: data.telefono,
          f_nacimiento: data.f_nacimiento,
          dni: data.dni,
          genero: data.genero,
          role: data.role
        });

        res.status(200).send({ data: reg });
      }

    } else {
      res.status(500).send({ message: 'NoAccess' });
    }
  } else {
    res.status(500).send({ message: 'NoAccess' });
  }
}

const eliminar_user_admin = async function (req, res) {
  if (req.user) {
    if (req.user.role === 'ADMIN') {

      var id = req.params['id'];
      let reg = await User.findByIdAndRemove({ _id: id });
      res.status(200).send({ data: reg });

    } else {
      res.status(500).send({ message: 'NoAccess' });
    }
  } else {
    res.status(500).send({ message: 'NoAccess' });
  }
}

module.exports = {
  registro_user,
  login_user,
  obtener_user,
  obtener_user_admin,
  listar_usuarios_filtro_admin,
  actualizar_user_admin,
  eliminar_user_admin
}