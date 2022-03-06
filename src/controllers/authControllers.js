const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../src/database/config/auth");

const authControllers = {
  /*   login: (req, res) => {
        
    }, */

  register: (req, res) => {
    // Encriptando password

    let password = bcryptjs.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    //Crear un usuario
    db.User.create({
      email: req.body.email,
      password: password,
    });
    console.log(req.body)
      .then((user) => {
        //Creo el token
        const token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        res.json({
          user: user,
          token: token,
        });
      })
     
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};

module.exports = authControllers;
