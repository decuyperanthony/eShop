const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Comment extends Sequelize.Model {

};

Comment.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
}, {
    sequelize: dbConnection,
    tableName: "comment",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Comment;