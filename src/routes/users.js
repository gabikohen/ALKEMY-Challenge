const express = require("express");
const router = express.Router();

// Controlador
const AuthControllers = require("../controllers/authControllers");

// Middleware

const auth = require("../middlewares/auth");


/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *          type: object
 *          properties:
 *            email:
 *             type: string
 *             description: the user email
 *            password:
 *              type: string
 *              description: the user password
 *      
 *          required:
 *            - email
 *            - password
 *           
 *          example:
 *            email : alkemy
 *            password: alkemy1234
 */






// Login
router.get("/auth/login", auth, AuthControllers.login);
router.post("/auth/login", AuthControllers.login);

//Registro
router.post("/auth/register", AuthControllers.register);

module.exports = router;
