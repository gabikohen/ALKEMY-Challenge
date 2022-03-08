"use strict";
const { User } = require("../models");
const { Movie } = require("../models");
const { Character } = require("../models");
const { Genre } = require("../models");
const bcryptjs = require("bcryptjs");
const authConfig = require("../../database/config/auth");

module.exports = {
  async up(queryInterface, Sequelize) {
    return promise.all([
      // USUARIOS
      User.create({
        email: "gabokohen@gmail.com",
        password: bcryptjs.hashSync("1234567", +authConfig.rounds),
      }),
      User.create({
        email: "fleric@gmail.com",
        password: bcryptjs.hashSync("1234567", +authConfig.rounds),
      }),

      // MOVIES

      Movie.create({
        title: "The Jungle Book",
        image: "",
        qualification: 8,
        create_date: 1967,
      }),
      Movie.create({
        title: "Lion King",
        image: "",
        qualification: 7,
        create_date: 1994,
      }),

      Movie.create({
        title: "Chicken Little",
        image: "",
        qualification: 5,
        create_date: 2005,
      }),

      // CHARACTERS
      Character.create({
        name: "Baloo",
        age: 9,
        weight: "350kg",
        history:
          " Es el oso bezudo encargado de transmitir  a los lobatos de Seonee",
        image: "",
      }),
      Character.create({
        name: "Simba",
        age: 3,
        weight: "200kg",
        history:
          " EL rey de la selva",
        image: "",
      }),
      Character.create({
        name: "Buck",
        age: 40,
        weight: "110kg",
        history: " El papa de Chicken little",
        image: "",
      }),

      /// GENEROS
      Genre.create({
        name: "Slice-of-Life",
        image: "",
      }),

      Genre.create({
        name: "Superhero",
        image: "",
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete("characters", null, {}),
      queryInterface.bulkDelete("users", null, {}),
    ]);
  },
};
