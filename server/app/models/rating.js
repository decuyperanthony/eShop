const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Rating extends Sequelize.Model {

};

Rating.init({
    value: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: dbConnection,
    tableName: "rating",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Rating;