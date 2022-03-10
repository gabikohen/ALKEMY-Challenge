const express = require("express");
const router = express.Router();

//Controller

const CharacterControllers = require("../controllers/charactersControllers");

// Middlewares

const photoMulter = require("../middlewares/multer");

/* Get all the Characters */
router.get("/characters", CharacterControllers.allCharacters);

/* Detail a Character */
router.get("/characters/:id", CharacterControllers.detailCharacter);

/* Search a Character */

/* router.get('/search',CharacterControllers,searchCharacters); */

/* Create a Character */
router.post("/characters", CharacterControllers.createCharacter);

/* Edit Characters  */

router.put("/characters/:id", CharacterControllers.updateCharacter);

/* Delete Characters */
router.delete("/characters/:id", CharacterControllers.deleteCharacter);

module.exports = router;
