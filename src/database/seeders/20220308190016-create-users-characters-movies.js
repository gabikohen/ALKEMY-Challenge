"use strict";
const { User } = require("../models");
const { Movie } = require("../models");
const { Character } = require("../models");
const { Genre } = require("../models");
const bcryptjs = require("bcryptjs");
const authConfig = require('../config/auth')

module.exports = {
 async up(queryInterface, Sequelize) {
    return Promise.all([
      // USUARIOS
      User.create({
        email: "gabokohen@gmail.com",
        password: bcryptjs.hashSync("1234567", +authConfig.rounds)
      }),
      User.create({
        email: "fleric@gmail.com",
        password: bcryptjs.hashSync("1234567", +authConfig.rounds)
      }),

      // MOVIES

      Movie.create({
        title: "The Jungle Book",
        image: "jungle.jpg",
        qualification: 8,
        created: 1967
      }),
      Movie.create({
        title: "Lion King",
        image: "reyleon.jpg",
        qualification: 7,
        created: 1994
      }),

      Movie.create({
        title: "Chicken Little",
        image: "chickenlittle.jpg",
        qualification: 5,
        created: 2005
      }),

      // CHARACTERS
      Character.create({
        name: "Baloo",
        age: 9,
        weight: 350,
        history:
          " Es el oso bezudo encargado de transmitir  a los lobatos de Seonee",
        image: "baloo.jpg"
      }),
      Character.create({
        name: "Simba",
        age: 3,
        weight: 200,
        history:
          " EL rey de la selva",
        image: "simba.jpg"
      }),
      Character.create({
        name: "Buck",
        age: 40,
        weight: 110,
        history: " El papa de Chicken little",
        image: "buck.jpg"
      }),

      /// GENEROS
      Genre.create({
        name: "Slice-of-Life",
        image: "Mostrando imagen"
      }),

      Genre.create({
        name: "Superhero",
        image: "Mostrando imagen"
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('personajes', null, {}),
      queryInterface.bulkDelete('usuarios', null, {})
    ])
  }
};