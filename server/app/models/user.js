const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

// const moment = require("moment");
// // pour avoir momentJS en francais
// moment.locale('fr');

class User extends Sequelize.Model {

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    };

    // getGoodDate() {
    //     return moment(this.created_at).fromNow();
    // }
};

User.init({
    firstname: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastname: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // new
    sexe: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: true
    },
    phone: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    adresse1: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    adresse2: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    zip: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    city: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    country: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    role: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'user'
    },
    // picture_road: {
    //     type: Sequelize.TEXT,
    //     allowNull: true,
    //     defaultValue: "avatar.png"
    // }
}, {
    sequelize: dbConnection,
    tableName: "user",
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = User;
