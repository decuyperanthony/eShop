const {
    Article,
    Cart
} = require('../models');

 const articlesInCartController = {
//     asociate: (req, res) => {
//         let { cart_id, article_id } = req.params;
//         try {
//             let cart = await Cart.findByPk(cart_id);
//             const article = await Article.findByPk(article_id);
//             if (!cart || !article) {
//                 return res.status(401).send('la ligne de commande ou l\'article n\'existe pas');

//             }
//         } catch (error) {
//             console.trace(error);
//             res.status(500).send(error);
//         }
//     },
//     dissociate: (req, res) => {
//         try {

//         } catch (error) {
//             console.trace(error);
//             res.status(500).send(error);
//         }
//     }
 }

module.exports = articlesInCartController;