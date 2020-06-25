const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Cart extends Sequelize.Model {

};

Cart.init({
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}, {
    sequelize: dbConnection,
    tableName: "cart",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Cart;