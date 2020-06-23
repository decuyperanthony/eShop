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
    },
    addArticle: async (req, res) => {
        try {
            const newArticle = new Article(req.body);
            const savedArticle = await newArticle.save();
            res.status(200).send(savedArticle);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    updateArticle: async (req, res, next) => {
        const articleId = req.params.id;
        console.log('articleId', articleId);
        try {
            const article = await Article.findByPk(articleId);
            if (!article) {
                return next();
            }
            console.log('req.body', req.body);
            await article.update(req.body);
            res.status(200).send(article)
        } catch (error) {
            // console.trace(error);
            res.status(500).send(error);
        }
    },
    removeArticle: async (req, res, next) => {
        const articleId = req.params.id;
        try {
            let article = await Article.findByPk(articleId);
            if (!article) {
                return next();
            }
            article.destroy();
            res.status(200).send('article supprimé');
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = ArticleController;