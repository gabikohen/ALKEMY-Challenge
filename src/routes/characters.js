const express = require("express");
const router = express.Router();

//Controller

const CharacterControllers = require("../controllers/charactersControllers");

// Middlewares

const fileUpload = require("../middlewares/multerCharacters");

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
