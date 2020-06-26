const { User } = require('../models');
const jwtUtils = require('../utils/jwt.utils');
// mettre le remove User ici
const adminController = {
      //! à mettre dans la partie adminController
      removeUser: async (req, res) => {
        let adminId = req.params.adminId;
        let userId = req.params.userId;
        let token = req.body.token;
        try {
            // verif si le user est admin avec son token
            const user = await User.findByPk(userId);
            const admin = await User.findByPk(adminId);
            if (!user) {
                console.log('Cet utilisateur n existe pas');
                return res.status(401).send('Cet utilisateur n\'existe pas');
            }
            if (!admin) {
                console.log('Vous n\'etes pas autorise');
                return res.status(403).send('Vous n\'etes pas autorise');
            }
            if (!token) {
                console.log('Vous n\'avez aucun droit, manque le token');
                return res.status(401).send('Vous n\'avez aucun droit, manque le token');
            }
            const verifToken = jwtUtils.verifyToken(token);
            console.log('verifToken', verifToken)
            if (verifToken.role != 'admin') {
                return res.status(401).send('Vous n\'avez pas les droits');
            } else {
                await user.destroy();
            }
            //! fin token
            res.status(200).send('utilisateur supprimé');

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = adminController;