const { User } = require('../models');

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
    // faire une fonction checkMail ?
    updateUser: async (req, res) => {
        let userId = req.params.id;
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                console.log('Cet utilisateur n existe pas');
                return res.status(401).send('Cet utilisateur n\'existe pas');
            }
            await user.update(req.body);
            res.status(200).send(user);

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeUser: async (req, res) => {
        try {

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = userController;
