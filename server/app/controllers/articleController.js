const { Article } = require('../models');

const ArticleController = {
    getAllArticles: async (req, res) => {
        try {
            let articles = await Article.findAll({
                offset: 0,
                limit: 100,
                include: ["category", "collection"],
                // order: [title, 'ASC'],
                // order: [name, 'ASC'],
            });
            res.send(articles);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    getOneArticle: async (req, res) => {
        try {
            let articleId = req.params.id;
            let article = await Article.findByPk(articleId, {
                include: ["category", "collection"],
            });
            res.send(article);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = ArticleController;