// == Require express
const express = require('express');

// == Controller
const authController = require('./controllers/authController');

const router = express.Router();


// == page login
router.post("/login", authController.loginAction);
// == page signup
router.post("/signup", authController.signupAction);



module.exports = router;