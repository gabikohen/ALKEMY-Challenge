const express = require("express");
const router = express.Router();

// Controlador
const AuthControllers = require("../controllers/authControllers");

// Middleware

const auth = require('../middlewares/auth');

/* router.post('/email', AuthControllers.getEmail); */

// Login
router.get("/auth/login",auth,AuthControllers.login);
router.post("/auth/login", AuthControllers.login);

//Registro
router.post("/auth/register",AuthControllers.register);


module.exports = router;
