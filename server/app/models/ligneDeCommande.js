const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class LigneDeCommande extends Sequelize.Model {

};

LigneDeCommande.init({
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: dbConnection,
    tableName: "ligneDeCommande",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = LigneDeCommande;