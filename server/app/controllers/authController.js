const User = require("../models/user");


// une libraire pour tester le format des email
const emailValidator = require("email-validator");
// bcrypt, pour HASHER les mots de passer
const bcrypt = require("bcrypt");

const authController = {
    // on traite le formulaire de connexion
    loginAction: async (req, res) => {
        try {
        // récupérer les infos du formulaire
        console.log('req.body', req.body)
        const {
            email,
            password
        } = req.body;
        // tenter de récupérer un utilisateur via l'email fourni
        const user = await User.findOne({
            where: {
             email
            }
        });
        console.log('user', user);
        // si le user n'existe pas
        if (!user) {
            console.log('Cet email existe pas');
            return res.status(401).end();
        }
        // pour comparer le mdp
        let testPass = true;
        // if (user) {
        //  testPass = bcrypt.compareSync(password, user.password);
        // }
        // si le user existe et le testPass est true
        if (user && testPass) {
            console.log('<< 200 ok user :', user);
            res.send(user);
        } else {
            console.log('<< 401 UNAUTHORIZED');
            res.status(401).end();
        }
        } catch (error) {
            console.trace(error);
            res.status(500).render("500", {
                error
            });
        }
    },
}

module.exports = authController;
