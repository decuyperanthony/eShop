const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Category extends Sequelize.Model {

};

Category.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "#ffffff"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }

}, {
    sequelize: dbConnection,
    tableName: "category",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Category;