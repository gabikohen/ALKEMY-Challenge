const db = require("../database/models");
const { validationResult } = require("express-validator");
const Op = db.Sequelize.Op;
const moviesControllers = {
  allMovies: (req, res) => {
    const { genre, name, order } = req.query;
    const filter = {};

    if (name) {
      filter.title = { [Op.like]: `${name}%` };
    }
    // pasa por defecto orden ASC
    let FilterOr = ["created", "ASC"];

    if (order) {
      // si existe order lo asigna a orderFilter en mayuscula
      const ordenarUp = order.toUpperCase();
      if (ordenarUp === "ASC" || ordenarUp === "DESC") {
        FilterOr = ["created", order];
      } else {
        return res.status(400).send("Use a valid order (ASC/DESC)");
      }
    }

    const genreFilters = {};
    if (genre) {
      genreFilters.genres_id = 
        genre
    
    }

    db.Movie.findAll({
      attributes: ["image", "title", "created"],
      where: filter,
      order: [FilterOr],
      include: [
        {
          model: db.Genre,
          where: genreFilters,
          attributes: [],
        },
      ],
    })
      .then((characters) => {
        return res.status(200).json(characters);
      })
      .catch((error) => console.error(error));
  },

  detailmovies: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then((detalle) => {
        return res.status(200).json({
          id: detalle.movies_id,
          title: detalle.title,
          qualification: detalle.qualification,
          create_date: detalle.create_date,
          image: detalle.image,
        });
      })
      .catch((error) => console.error(error));
  },

  createMovies: (req, res) => {
    db.Movie.create(req.body)
      .then((creacion) => {
        return res.status(200).json(creacion);
      })
      .catch((error) => console.error(error));
  },

  updateMovies: (req, res) => {
    const resultValidation = validationResult(req);
    db.Movie.findByPk(req.params.id).then((edit) => {
      if (resultValidation.errors.length > 0) {
        return res.status(401).json({
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }
      db.Movie.update(
        {
          id: req.body.movies_id || edit.movies_id,
          title: req.body.title || edit.title,
          qualification: req.body.qualification || edit.qualification,
          create_date: req.body.create_date || edit.create_date,
          image: req.body.image || edit.image,
        },
        {
          where: {
            characarters_id: id,
          },
        }
      )
        .then(() => {
          return res.status(200).json({
            msg: " Movies has been update ",
          });
        })
        .catch((error) => res.send(error));
    });
  },

  deleteMovies: (req, res) => {
    db.Movie.destroy({
      where: { movies_id: req.params.id },
    })
      .then(() => {
        return res.json("Movie has been deleted");
      })
      .catch((error) => console.error(error));
  },
};

module.exports = moviesControllers;
