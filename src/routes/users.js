const express = require("express");
const router = express.Router();

// Controlador
const AuthControllers = require("../controllers/authControllers");

// Middleware

const auth = require('../middlewares/auth');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });


/* router.post('/email', AuthControllers.getEmail); */
router.post("/auth/register",AuthControllers.register);
router.post("/auth/login", AuthControllers.login);


router.get("/auth/login",auth,AuthControllers.login);

module.exports = router;
