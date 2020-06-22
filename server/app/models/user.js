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
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phone: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    adresse1: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    adresse2: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    zip: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    city: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    country: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    role: {
        type: Sequelize.TEXT,
        allowNull: false,
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
