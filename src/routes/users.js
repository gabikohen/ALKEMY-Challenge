 const express = require('express');
const router = express.Router()
 
const AuthControllers = require('../controllers/authControllers'); 




/* router.post('/email', AuthControllers.getEmail); */
router.post('/auth/register', AuthControllers.register);
/* router.post('/auth/login',AuthControllers.login); */


module.exports = router; 