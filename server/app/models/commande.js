const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Commande extends Sequelize.Model {

};

Commande.init({
    status: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    sequelize: dbConnection,
    tableName: "commande",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Commande;