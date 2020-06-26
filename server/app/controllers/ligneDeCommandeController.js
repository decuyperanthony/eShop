const { LigneDeCommande, Article } = require('../models');
const LigneDeCommandeController = {

    getAllLigneDeCommandes: async (req, res) => {
        try {
            const ligneDeCommandes = await LigneDeCommande.findAll({
                // offset,
                // limit,
                include: [
                    "orderedArticle",
                    // "commande"
                ],
                // order: [[title, 'ASC'], [name, 'ASC']],
            });
            res.send(ligneDeCommandes);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOneLigneDeCommande: async (req, res) => {
        try {
            let ligneDeCommande_id = req.params.id;
            const ligneDeCommande = await LigneDeCommande.findByPk(ligneDeCommande_id, {
                include: [
                    "orderedArticle",
                    //  "commande"
                    ],
            });
            if (!ligneDeCommande) {
                return res.status(401).send('Cette ligne n existe pas')
            }
            res.send(ligneDeCommande);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    addLigneDeCommande: async (req, res) => {
        let { article_id } = req.body;
        // // let articleId = req.params.article_id;
        try {
            const article = await Article.findByPk(article_id);
            if (!article) {
                return res.status(401).send('Cette article n existe pas')
            }
            if (article) {
                // faire la verif concernant le stock

                // déduire le stock de l'article

                // creer enregistrer la ligne de commande
                const newLigneDeCommande = new LigneDeCommande(req.body);
                newLigneDeCommande.article_id = article_id;
                const savedligneDeCommande = await newLigneDeCommande.save();
                res.status(200).send(savedligneDeCommande);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    updateLigneDeCommande: async (req, res, next) => {
        // let { id } = req.params;


        try {
            console.log('object');
            // dans le req.body on aura la quantité modifiée

            let ligneDeCommande = await LigneDeCommande.findByPk(req.params.id);
            if (!ligneDeCommande) {
                console.log('Cette ligne n existe pas');
                return res.status(401).send('Cette ligne n existe pas');
            }
            let { article_id } = req.body;
            if (article_id == ligneDeCommande.article_id) {
                console.log('ok');
                // on va pouvoir update
                // console.log('req.body', req.body);
                await ligneDeCommande.update(req.body);
                res.status(200).send(ligneDeCommande);
            } else {
                console.log('pas le bon article');
                return res.status(401).send('pas le bon article à modifier');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeLigneDeCommande: async (req, res, next) => {
        let ligneDeCommande_id = req.params.id;
        // let { cart_id, user_id } = req.params;
        try {
            const ligneDeCommande = await LigneDeCommande.findByPk(ligneDeCommande_id);
            if (!ligneDeCommande) {
                console.log('Cette ligne n existe pas');
                return res.status(401).send('Cette ligne n existe pas')
            }
            ligneDeCommande.destroy();
            res.status(200).send('ligne supprimé');
        } catch (error) {
                    console.trace(error);
                    res.status(500).send(error);
                }
    }
}

module.exports = LigneDeCommandeController;