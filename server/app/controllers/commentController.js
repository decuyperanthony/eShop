const { Comment } = require('../models');

const commentController = {
    getAllComments: async (req, res) => {
        try {
            let comments = await Comment.findAll({
                // offset,
                // limit,
                include: ["author", "article"],
                // order: [title, 'ASC'],
                // order: [name, 'ASC'],
            });
            res.send(comments);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    getOneComment: async (req, res) => {
        try {
            let comment_id = req.params.id;
            let comment = await Comment.findByPk(comment_id, {
                include: ["author", "article"],
            });
            res.send(comment);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
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
    updateComment: async (req, res, next) => {
        let { comment_id, user_id } = req.params;
             console.log('user_id in Update comment', user_id)
        try {
            const comment = await Comment.findByPk(comment_id);
            if (!comment) {
                console.log('Ce commentaire existe pas');
                return res.status(401).send('Ce commentaire n\'existe pas');
            }
            // console.log('comment', comment);
            // console.log('comment.user_id', comment.user_id);
            if (user_id == comment.user_id) {
                console.log('ok');
                // on va pouvoir update
                // console.log('req.body', req.body);
                await comment.update(req.body);
                res.status(200).send(comment);
            } else {
                console.log('pas le bon id');
                return res.status(401).send('vous n\'êtes pas le proprietaire de ce commentaire');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeComment: async (req, res, next) => {
        const articleId = req.params.id;
        let { comment_id, user_id } = req.params;

   try {
       const comment = await Comment.findByPk(comment_id);
       if (!comment) {
           console.log('Ce commentaire existe pas');
           return res.status(401).send('Ce commentaire n\'existe pas');
       }
       if (user_id == comment.user_id) {
           console.log('ok');
           // on va pouvoir supprimer
           // console.log('req.body', req.body);
           comment.destroy();
           res.status(200).send('commentaire supprimé');
       } else {
           console.log('pas le bon id');
           return res.status(401).send('vous n\'êtes pas le proprietaire de ce commentaire');
       }
   } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = commentController;