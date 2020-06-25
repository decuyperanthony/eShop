const User = require('./user');
const Article = require('./article');
const Category = require('./category');
const Collection = require('./collection');
const Rating = require('./rating');
const Comment = require('./comment');
const Cart = require('./cart');



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

//! à changer -----
//* -----   association User <-> Cart
User.hasOne(Cart, {
    foreignKey: "user_id",
    as: "cart"
})

Cart.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner"
})

//* -----   association Article <-> Cart
Article.hasMany(Cart, {
    foreignKey: "article_id",
    as: "carts"
})

Cart.belongsTo(Article, {
    foreignKey: "article_id",
    as: "articleCart"
})



module.exports = {
    User,
    Article,
    Category,
    Collection,
    Comment,
    Rating,
    Cart
}