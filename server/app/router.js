// == Require express
const express = require('express');

// == Controller
const authController = require('./controllers/authController');
const articleController = require('./controllers/articleController');
const commentController = require('./controllers/commentController');


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

//* ----- ROUTE DES COMMENTS -----
router.get("/comment", commentController.getAllComments);
router.get("/comment/:id", commentController.getOneComment);
router.post("/comment/user/:user_id/article/:article_id", commentController.addComment);
router.patch("/comment/:comment_id/user/:user_id", commentController.updateComment);
router.delete("/comment/:comment_id/user/:user_id", commentController.removeComment);

//* ----- ROUTE DES RAITING -----
// router.get("/comment", commentController.getAllComments);
// router.get("/comment/:id", commentController.getOneComment);
// router.post("/comment/user/:user_id/article/:article_id", commentController.addComment);
// router.patch("/comment/:comment_id/user/:user_id", commentController.updateComment);
// router.delete("/comment/:comment_id/user/:user_id", commentController.removeComment);



module.exports = router;