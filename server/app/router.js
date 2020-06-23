// == Require express
const express = require('express');

// == Controller
const authController = require('./controllers/authController');

const router = express.Router();


// == page login
router.post("/login", authController.loginAction);



module.exports = router;