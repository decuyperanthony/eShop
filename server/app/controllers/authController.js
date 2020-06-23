const User = require("../models/user");
const jwtUtils = require('../utils/jwt.utils');


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
            return res.send('Cet email existe pas').status(401).end();
        }
        // pour comparer le mdp
        let testPass = "";
        if (user) {
         testPass = bcrypt.compareSync(password, user.password);
        }
        // si le user existe et le testPass est true
        if (user && testPass) {
            console.log('<< 200 ok user :', user);
              //! token ----------------------
              console.log('user.id :>> ', user.id);
              user.token = jwtUtils.generateTokenForUser(user);
              console.log('userToken', user.token)
              console.log('use after toke', user)
              //! fin token ----------------
            res.send(user);
        } else {
            console.log('<< 401 UNAUTHORIZED');
            res.send('le mot de passe est incorrect').status(401).end();
        }
        } catch (error) {
            console.trace(error);
            res.status(500).render("500", {
                error
            });
        }
    },

    signupAction: async (req, res) => {
        try {
            // on recup les infos
            const {
                email,
                password,
                firstname,
                lastname,
                // sexe,
                // birthday,
                // phone,
                // adresse1,
                // adresse2,
                // zip,
                // city,
                // country
            } = req.body;
            // on verif que l'user n'existe pas avec son mail
            const user = await User.findOne({
                where: {
                    email
                }
            });
            // on se prépare une liste d'erreur
            let errorsList = [];
            // si on trouve un user => le mail existe
            if (user) {
                errorsList.push("Cet email existe déjà");
            }
            if (!firstname) {
                errorsList.push("Le prénom ne peut pas être vide");
            }
            if (!lastname) {
                errorsList.push("Le nom ne peut pas être vide");
            }
            if (!emailValidator.validate(email)) {
                errorsList.push(
                    "L'email n'est pas un email correct"
                );
            }
            if (password.length < 8) {
                errorsList.push(
                  "Le mot de passe doit contenir un minimum de 8 caractères"
                );
            }
            if (errorsList.length === 0) {
                let newUser = new User(req.body);
                let savedUser = await newUser.save();
                res.status(200).send(savedUser);
            } else {
                res.send(errorsList);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = authController;
