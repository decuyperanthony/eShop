const User = require('./user');
const Article = require('./article');
const Category = require('./category');
const Collection = require('./collection');
const Rating = require('./rating');
const Comment = require('./comment');
const LigneDeCommande = require('./ligneDeCommande');
const Commande = require('./commande');




//*    association Article <-> Category
Article.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
})

Category.hasMany(Article, {
    foreignKey: "category_id",
    as: "articles"
})


//*    association Article <-> Collection
Article.belongsTo(Collection, {
    foreignKey: "collection_id",
    as: "collection"
})

Collection.hasMany(Article, {
    foreignKey: "collection_id",
    as: "articles"
})

//*  -----  association Article <-> Rating
Article.hasMany(Rating, {
    foreignKey: "article_id",
    as: "rates"
})

Rating.belongsTo(Article, {
    foreignKey: "article_id",
    as: "ratingArticle"
})


//* -----   association Article <-> Comment
Article.hasMany(Comment, {
    foreignKey: "article_id",
    as: "comments"
})

Comment.belongsTo(Article, {
    foreignKey: "article_id",
    as: "article"
})

//*  -----  association User <-> Rating
User.hasMany(Rating, {
    foreignKey: "user_id",
    as: "rates"
})

Rating.belongsTo(User, {
    foreignKey: "user_id",
    as: "author"
})

//* -----   association User <-> Comment
User.hasMany(Comment, {
    foreignKey: "user_id",
    as: "comments"
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    as: "author"
})

//* -----   association Article <-> LigneDeCommande
Article.hasOne(LigneDeCommande, {
    foreignKey: "article_id",
    as: "ligneDeCommande"
})

LigneDeCommande.belongsTo(Article, {
    foreignKey: "article_id",
    as: "orderedArticle"
})

//* -----   association LigneDeCommande <-> Commande
// LigneDeCommande.belongsTo(Commande, {
//     foreignKey: "ligneDeCommande_id",
//     as: "commande"
// })

// Commande.hasMany(LigneDeCommande, {
//     foreignKey: "ligneDeCommande_id",
//     as: "lignesDeCommandes"
// })

//* -----   association Commande <-> User
User.hasMany(Commande, {
    foreignKey: "user_id",
    as: "commandes"
})

Commande.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner"
})

//!------------- à changer -----
//? ------- ici c est ok --------
//* -----   association User <-> Cart
// User.hasOne(Cart, {
//     foreignKey: "user_id",
//     as: "cart"
// })

// Cart.belongsTo(User, {
//     foreignKey: "user_id",
//     as: "owner"
// })

// //? ici non ok---------
// //? il faut ajouter une table de liaison
// //* -----   association n to n  Article <-> Cart
// Article.belongsToMany(Cart, {
//     through: "articles_in_cart",
//     foreignKey: "article_id",
//     otherKey: "cart_id",

//     timestamps: false,

//     as: "carts"
// })

// Cart.belongsToMany(Article, {
//     through: "articles_in_cart",
//     foreignKey: "cart_id",
//     otherKey: "article_id",

//     timestamps: false,

//     as: "articles"
// })

//!---------------- fin de => à changer ------------------------



module.exports = {
    User,
    Article,
    Category,
    Collection,
    Comment,
    Rating,
    Commande,
    LigneDeCommande
}