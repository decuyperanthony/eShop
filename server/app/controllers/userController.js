const { User } = require('../models');
const jwtUtils = require('../utils/jwt.utils');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            // possibilité de gerer le offset limit en envoyant un param dans l'url
            let offset = 0;
            let limit = 30;
            const users = await User.findAll({
                offset,
                limit,
                // include: ["category", "collection", "comments"],
                // order: [[title, 'ASC'], [name, 'ASC']],
                // order: [title, 'ASC'],
                // order: [name, 'ASC'],
            });
            res.send(users);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    getOneUser: async (req, res) => {
        let userId = req.params.id;
        try {
            const user = await User.findByPk(userId, {
                // include: ["category", "collection", "comments"],
            });
            if (!user) {
                return res.status(401).send('cet utilisateur n\' existe pas')
            }
            res.send(user);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    //* faire une fonction checkMail ?
    // checkMail: async (req, res) => {
    //     // le user m'envoi son nouveau mail qui doit etre unique
    //     // le champ mail doit être unique
    // },
    // cet update va servir à changer l'adresse etc.. de la table userDetails
    // dans cette table il y aura le user_id en lien avec la table user
    // table user : mail password
    // table userDetails : firstname, lastname, birthday etc..
    updateUser: async (req, res) => {
        let userId = req.params.id;
        let token = req.body.token;
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                console.log('Cet utilisateur n existe pas');
                return res.status(401).send('Cet utilisateur n\'existe pas');
            }
            if (!token) {
                console.log('Vous n\'avez aucun droit, manque le token');
                return res.status(401).send('Vous n\'avez aucun droit, manque le token');
            }
            //! check le token
            // console.log('token before decrypt', token);
            const verifToken = jwtUtils.verifyToken(token);
            // console.log('token after bcrypt', verifToken);
            // console.log('verifToken.id', verifToken.userId);
            // console.log('userId', userId);
            if (verifToken.userId != userId) {
                return res.status(401).send('Vous n\'avez pas les droits');
            } else {
                await user.update(req.body);
            }
            //! fin token
            res.status(200).send(user);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = userController;
