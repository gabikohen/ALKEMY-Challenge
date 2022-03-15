const express = require("express");
const router = express.Router();

//Controller

const CharacterControllers = require("../controllers/charactersControllers");

// Middlewares

const fileUpload = require("../middlewares/multerCharacters");

/**
 * @swagger
 * components:
 *   schemas:
 *      Character:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Character name
 *            age:
 *              type: integer
 *              description: Character age
 *            weight:
 *              type: number
 *              description: Character weight
 *            history:
 *              type: string
 *              description: Character history
 *            image:
 *              type: string
 *              description:  Character image (.jpg)
 *          required:
 *            - name
 *            - age
 *            - weight
 *            - history
 *            - image
 *          example:
 *            name : Baloo
 *            age: 9
 *            weight: 350
 *            history: Es el oso bezudo encargado de transmitir  a los lobatos de Seonee
 *            image: baloo.jpg
 */



/* Get all the Characters */
router.get("/characters", CharacterControllers.allCharacters);

/* Detail a Character */
router.get("/characters/:id", CharacterControllers.detailCharacter);



/* Create a Character */
router.post("/characters",fileUpload.single('image'),CharacterControllers.createCharacter);

/* Edit Characters  */

router.put("/characters/:id", CharacterControllers.updateCharacter);

/* Delete Characters */
router.delete("/characters/:id", CharacterControllers.deleteCharacter);

module.exports = router;
