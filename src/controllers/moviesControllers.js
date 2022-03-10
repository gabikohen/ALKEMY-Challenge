const db = require("../database/models");
const { validationResult } = require("express-validator");

const moviesControllers = {
  allMovies: (req, res) => {

    db.Movie.findAll({

      include:{
        model:db.Character,
        attributes:["image","title"]
      },
        attributes: ["image", "title", "create_date","age","weigh","history"],
    
    })
      .then((todas) => {
        return res.status(200).json(todas);
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
          id: req.body.movies_id ||edit.movies_id,
          title: req.body.title ||edit.title,
          qualification: req.body.qualification ||edit.qualification,
          create_date: req.body.create_date ||edit.create_date,
          image: req.body.image ||edit.image ,
        },
        {
          where: {
            characarters_id: id,
          },
        }
      )
        .then(() => {
          return send.status(200).json("Character has been update");
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

  /* 
 searchMovies:(req,res) =>{
      db.Characters.findAll({
        where: {
            : { [Op.like]: '%'},
          },
        
      })
  } */
};

module.exports = moviesControllers;
