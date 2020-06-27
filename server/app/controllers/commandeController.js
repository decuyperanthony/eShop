const { Commande, LigneDeCommande, User } = require('../models');

const commandeController = {
    getAllCommandes: async (req, res) => {
        try {
            const commandes = await Commande.findAll({
                // offset,
                // limit,
                include: [
                    "owner",
                    {
                        association: "lignesDeCommandes",
                        include: ["orderedArticle"]
                    }
                    // "lignesDeCommandes"
                ],
                // order: [[title, 'ASC'], [name, 'ASC']],
            });
            res.send(commandes);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOneCommande: async (req, res) => {
        let commande_id = req.params.id;
        try {

            const commande = await Commande.findByPk(commande_id, {
                include: [
                     "owner",
                     "lignesDeCommandes"
                    ],
            });
            if (!commande) {
                return res.status(401).send('Cette commande n existe pas')
            }
            res.send(commande);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    addCommande: async (req, res) => {
        // rien dans les params
        // dans reqbody => lignedecommandeid, et userID
        try {
            const ligneDeCommande = await LigneDeCommande.findByPk(req.body.ligneDeCommande_id);
            const user = await User.findByPk(req.body.user_id);
            if (!ligneDeCommande && !user) {
                return res.status(401).send('Ces relations n existent pas');
            }
                // on associe la ligne de commande et l'user une fois le panier validé
                const newCommande = new Commande(req.body);
                const savedCommande = await newCommande.save();
                res.status(200).send(savedCommande);

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    updateCommande: async (req, res, next) => {
        try {
            let commande = await Commande.findByPk(req.params.id);
            if (!commande) {
                console.log('Cette commande n existe pas');
                return res.status(401).send('Cette commande n existe pas');
            }
            let { user_id, ligneDeCommande_id } = req.body;
            if (user_id == commande.user_id) {
                if (ligneDeCommande_id == commande.ligneDeCommande_id) {
                    console.log('ok');
                    await commande.update(req.body);
                    res.status(200).send(commande);
                }
            } else {
                console.log('pas la bonne relation');
                return res.status(401).send('pas la bonne relation');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeCommande: async (req, res, next) => {
        let id = req.params.id;
        console.log('id', id)
        try {
            const commande = await Commande.findByPk(req.params.id);
            if (!commande) {
                console.log('Cette commande n existe pas');
                return res.status(401).send('Cette commande n existe pas');
            }
            let { user_id, ligneDeCommande_id } = req.body;
            if (user_id == commande.user_id) {
                if (ligneDeCommande_id == commande.ligneDeCommande_id) {
                    console.log('ok');
                    commande.destroy();
                    res.status(200).send('commande supprimé');
                }
            } else {
                console.log('pas la bonne relation');
                return res.status(401).send('pas la bonne relation');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = commandeController;