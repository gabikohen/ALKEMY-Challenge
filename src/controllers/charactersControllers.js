const db = require("../database/models");
/*  const Op = db.Sequelize.Op; */
const { validationResult } = require("express-validator");

const charactersControllers = {
  allCharacters: (req, res) => {
    
    
    db.Character.findAll({
    
        attributes: {
          include:["image", "name"],
        } 
      
    })
      .then((characters) => {
        return res.status(200).json(characters);
      })
      .catch((error) => console.error(error));
  },

  detailCharacter: (req, res) => {
    db.Character.findByPk(req.params.id)
      .then((detalle) => {
        return res.status(200).json({
          id: detalle.characters_id,
          name: detalle.name,
          age: detalle.age,
          weight: detalle.weight,
          history: detalle.history,
          image: detalle.image,
        });
      })
      .catch((error) => console.error(error));
  },

  createCharacter: (req, res) => {
    db.Character.create(req.body)
      .then((creacion) => {
        return res.status(200).json({
          data: creacion,
        });
      })
      .catch((error) => console.error(error));
  },


  /* Preguntarle guillle */
  updateCharacter: (req, res) => {
    const resultValidation = validationResult(req);
    let id = (req.params.id);
    db.Character.findByPk(id).then((personaje) => {
      if (resultValidation.errors.length > 0) {
        return res.status(401).json({
             //mapped convierte un array en objeto literal
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }
      db.Character.update(
        {
      
          name: req.body.name || personaje.name,
          age: req.body.age ||  personaje.age,
          weight: req.body.weight || personaje.weight,
          history: req.body.history || personaje.history,
          image: req.body.image || personaje.image,
          // la imagen viene req.body o req.file?
        },
        {
          where: {
            characters_id: id,
          },
        }
      )
        .then(() => {
          return send.status(200).json("Character has been update" + id);
        })
        .catch((error) => res.send(error));
    });
  },

  deleteCharacter: (req, res) => {
    db.Character.destroy({
      where: { characters_id: req.params.id },
    })
      .then(() => {
        return res.json("Character has been deleted");
      })
      .catch((error) => console.error(error));
  },


};

module.exports = charactersControllers;
