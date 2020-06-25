const { Cart } = require('../models');
const cartController = {
    getAllCarts: async (req, res) => {
        try {
            let carts = await Cart.findAll({
                // offset,
                // limit,
                // include: ["author", "ratingArticle"],
                // order: [[title, 'ASC'], [name, 'ASC']],
            });
            res.send(carts);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    getOneCart: async (req, res) => {
        try {
            let cart_id = req.params.id;
            const cart = await Cart.findByPk(cart_id, {
                // include: ["author", "ratingArticle"],
            });
            if (!cart) {
                return res.status(401).send('Ce panier n\' existe pas')
            }
            res.send(cart);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    addCart: async (req, res) => {
        let { user_id, article_id } = req.params;
        // let articleId = req.params.article_id;
        try {
            const newCart = new Cart(req.body);
            newCart.user_id = user_id;
            newCart.article_id = article_id;
            const savedCart = await newCart.save();
            res.status(200).send(savedCart);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    updateCart: async (req, res, next) => {
        let { cart_id, user_id } = req.params;

        try {
            const cart = await Cart.findByPk(cart_id);
            if (!cart) {
                console.log('Ce panier n existe pas');
                return res.status(401).send('Ce panier n\'existe pas');
            }

            if (user_id == cart.user_id) {
                console.log('ok');
                // on va pouvoir update
                // console.log('req.body', req.body);
                await cart.update(req.body);
                res.status(200).send(cart);
            } else {
                console.log('pas le bon id');
                return res.status(401).send('vous n\'êtes pas le proprietaire de ce panier');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    removeCart: async (req, res, next) => {
        // const articleId = req.params.id;
        let { cart_id, user_id } = req.params;

   try {
       const cart = await Cart.findByPk(cart_id);
       if (!cart) {
           console.log('Ce panier n existe pas');
           return res.status(401).send('Cette note n\'existe pas');
       }
       if (user_id == cart.user_id) {
           console.log('ok');
           // on va pouvoir supprimer
           // console.log('req.body', req.body);
           cart.destroy();
           res.status(200).send('panier supprimé');
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

module.exports = cartController;