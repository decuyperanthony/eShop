// == Require express
const express = require('express');

// == Controller
const authController = require('./controllers/authController');
const articleController = require('./controllers/articleController');


const router = express.Router();


// == page login
router.post("/login", authController.loginAction);
// == page signup
router.post("/signup", authController.signupAction);

//* ----- ROUTE DES ARTICLES -----
router.get("/article", articleController.getAllArticles);
router.get("/article/:id", articleController.getOneArticle);
router.post("/article", articleController.addArticle);
router.patch("/article/:id", articleController.updateArticle);
router.delete("/article/:id", articleController.removeArticle);



module.exports = router;