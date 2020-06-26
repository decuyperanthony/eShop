// == Require express
const express = require('express');

// == Controller
const authController = require('./controllers/authController');
const articleController = require('./controllers/articleController');
const commentController = require('./controllers/commentController');
const userController = require('./controllers/userController');
const ratingController = require('./controllers/ratingController');
const ligneDeCommandeController = require('./controllers/ligneDeCommandeController');
// const articlesInCartController = require('./controllers/articlesInCartController');
const adminController = require('./controllers/adminController');



const router = express.Router();


// == page login
router.post("/login", authController.loginAction);
// == page signup
router.post("/signup", authController.signupAction);

//* ----- ROUTE DES USERS -----
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
// router.post("/user/user/:user_id/article/:article_id", commentController.addComment);
router.patch("/user/:id", userController.updateUser);


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
router.get("/rating", ratingController.getAllRates);
router.get("/rating/:id", ratingController.getOneRate);
router.post("/rating/user/:user_id/article/:article_id", ratingController.addRate);
router.patch("/rating/:rating_id/user/:user_id", ratingController.updateRate);
router.delete("/rating/:rating_id/user/:user_id", ratingController.removeRate);

//* ----- ROUTE DES LIGNES DE COMMANDE -----
router.get("/lignedecommande", ligneDeCommandeController.getAllLigneDeCommandes);
router.get("/lignedecommande/:id", ligneDeCommandeController.getOneLigneDeCommande);
router.post("/lignedecommande", ligneDeCommandeController.addLigneDeCommande);
router.patch("/lignedecommande/:id", ligneDeCommandeController.updateLigneDeCommande);
router.delete("/lignedecommande/:id", ligneDeCommandeController.removeLigneDeCommande);

// //* ------ route association/dissociation articles/cart
// router.post('/article/cart/:cart_id', articlesInCartController.asociate);
// router.delete('/article/:article_id/cart/:cart_id', articlesInCartController.dissociate);


//! ----- ROUTE ADMIN -----
router.delete("/admin/:adminId/user/:userId", adminController.removeUser);



module.exports = router;