const User = require('./user');
const Article = require('./article');
const Category = require('./category');
const Collection = require('./collection');



//*    association Article <-> Category
Article.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
})

// Category.hasMany(Article)
Category.hasMany(Article, {
    foreignKey: "category_id",
    as: "articles"
})

//*    association Article <-> Collection
Article.belongsTo(Collection, {
    foreignKey: "collection_id",
    as: "collection"
})

// Category.hasMany(Article)
Collection.hasMany(Article, {
    foreignKey: "collection_id",
    as: "articles"
})





module.exports = {
    User,
    Article,
    Category,
    Collection
}