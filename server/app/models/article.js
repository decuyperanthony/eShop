const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

// const moment = require("moment");
// // pour avoir momentJS en francais
// moment.locale('fr');

class Article extends Sequelize.Model {

    // getFullName() {
    //     return this.firstname + ' ' + this.lastname;
    // };

    // getGoodDate() {
    //     return moment(this.created_at).fromNow();
    // }
};

Article.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    available: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    article_type: {
        type: Sequelize.TEXT,
        allowNull: true
    },
}, {
    sequelize: dbConnection,
    tableName: "article",
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = Article;
