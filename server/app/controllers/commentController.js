const { Comment } = require('../models');

const commentController = {
    getAllComments: async (req, res) => {
        try {
            let comments = await Comment.findAll({
                // offset,
                // limit,
                // include: ["author", "article"],
                // order: [title, 'ASC'],
                // order: [name, 'ASC'],
            });
            res.send(comments);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    // getOneArticle: async (req, res) => {
    //     try {
    //         let articleId = req.params.id;
    //         let article = await Article.findByPk(articleId, {
    //             include: ["category", "collection"],
    //         });
    //         res.send(article);
    //     } catch (error) {
    //         console.trace(error);
    //         res.status(500).send(error);
    //     }
    // },
    addComment: async (req, res) => {
        let { user_id, article_id } = req.params;
        // let articleId = req.params.article_id;
        try {
            const newComment = new Comment(req.body);
            newComment.user_id = user_id;
            newComment.article_id = article_id;
            const savedComment = await newComment.save();
            res.status(200).send(savedComment);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    // updateArticle: async (req, res, next) => {
    //     const articleId = req.params.id;
    //     console.log('articleId', articleId);
    //     try {
    //         const article = await Article.findByPk(articleId);
    //         if (!article) {
    //             return next();
    //         }
    //         console.log('req.body', req.body);
    //         await article.update(req.body);
    //         res.status(200).send(article)
    //     } catch (error) {
    //         // console.trace(error);
    //         res.status(500).send(error);
    //     }
    // },
    // removeArticle: async (req, res, next) => {
    //     const articleId = req.params.id;
    //     try {
    //         let article = await Article.findByPk(articleId);
    //         if (!article) {
    //             return next();
    //         }
    //         article.destroy();
    //         res.status(200).send('article supprimé');
    //     } catch (error) {
    //         console.trace(error);
    //         res.status(500).send(error);
    //     }
    // }
}

module.exports = commentController;