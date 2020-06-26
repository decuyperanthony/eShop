const { Rating } = require('../models');
const ratingController = {
    getAllRates: async (req, res) => {
        try {
            const rates = await Rating.findAll({
                // offset,
                // limit,
                include: ["author", "ratingArticle"],
                // order: [[title, 'ASC'], [name, 'ASC']],
            });
            res.send(rates);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    getOneRate: async (req, res) => {
        try {
            let rating_id = req.params.id;
            const rate = await Rating.findByPk(rating_id, {
                include: ["author", "ratingArticle"],
            });
            if (!rate) {
                return res.status(401).send('cette note n\' existe pas')
            }
            res.send(rate);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    addRate: async (req, res) => {
        let { user_id, article_id } = req.params;
        // let articleId = req.params.article_id;
        try {
            const newRate = new Rating(req.body);
            newRate.user_id = user_id;
            newRate.article_id = article_id;
            const savedRate = await newRate.save();
            res.status(200).send(savedRate);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    updateRate: async (req, res, next) => {
        let { rating_id, user_id } = req.params;

        try {
            const rate = await Rating.findByPk(rating_id);
            if (!rate) {
                console.log('Cette note n existe pas');
                return res.status(401).send('Cette note n\'existe pas');
            }

            if (user_id == rate.user_id) {
                console.log('ok');
                // on va pouvoir update
                // console.log('req.body', req.body);
                await rate.update(req.body);
                res.status(200).send(rate);
            } else {
                console.log('pas le bon id');
                return res.status(401).send('vous n\'êtes pas le proprietaire de cette note');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeRate: async (req, res, next) => {
        // const articleId = req.params.id;
        let { rating_id, user_id } = req.params;

   try {
       const rate = await Rating.findByPk(rating_id);
       if (!rate) {
           console.log('Cette note n existe pas');
           return res.status(401).send('Cette note n\'existe pas');
       }
       if (user_id == rate.user_id) {
           console.log('ok');
           // on va pouvoir supprimer
           // console.log('req.body', req.body);
           rate.destroy();
           res.status(200).send('note supprimée');
       } else {
           console.log('pas le bon id');
           return res.status(401).send('vous n\'êtes pas le proprietaire de cette note');
       }
   } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = ratingController;