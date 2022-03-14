const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../src/database/config/auth");
const sendGrid = require("../../services/sendgrid");
const authControllers = {
  login: (req, res) => {
    const { password, email } = req.body;

    //Buscar el user

    db.User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .json({ msg: "Usuario con este correo no encontrado" });
        } else {
          // comparo el pass del body con password del user(sobre la consulta)
          if (bcryptjs.compareSync(password, user.password)) {
            // Devolvemos token // Creo token
            const token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });
            res.json({
              user: user,
              token: token,
            });
          } else {
            // Acceso no authorizado
            res.status(401).json({ msg: "Contrasena incorrecta" });
          }
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  register: (req, res) => {
    // Encriptando password
    const { password } = req.body;
    if (password.length > 6) {
      let passHash = bcryptjs.hashSync(
        req.body.password,
        Number.parseInt(authConfig.rounds)
      );
      //Crear un usuario
      db.User.create({
        email: req.body.email,
        password: passHash,
      })

        .then((user) => {
          //Creo el token
          const token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });
          sendGrid(user.email),
            res.status(200).json({
              user: user,
              token: token,
            });
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    } else {
      res.status(400).send("Password debe tener mas 6 caracteres");
    }
  },
};

module.exports = authControllers;
