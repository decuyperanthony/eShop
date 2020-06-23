const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Collection extends Sequelize.Model {

};

Collection.init({
    name: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }

}, {
    sequelize: dbConnection,
    tableName: "collection",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Collection;