const Sequelize = require('sequelize');
// ne pas oublier d'installer pg npm install pg

// on instancie la connection
const dbConnection = new Sequelize(process.env.PG_URL, {
    logging: false
});


// et on l'exporte !
module.exports = dbConnection;

// on peut également definir
// define: {
//     createdAt: "created_at",
//     updatedAt: "updated_at",
// }
// comme ça on a plus à le refaire plus tard dans les models