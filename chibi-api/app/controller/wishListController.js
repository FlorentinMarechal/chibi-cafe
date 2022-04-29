const UserWishProduct = require('../models/UserWishProduct');

const wishListController = {

    findByUser: async (request, response) => {
        try {
            const wish = await UserWishProduct.findByUser(request.params.id);
            response.status(200).json(wish);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },

    addProduct: async (request, response) => {
        try {
            const productId = request.body.id
            const userId = request.params.id;
            const newWish = new UserWishProduct();
            await newWish.insertProduct(userId, productId);
            response.status(200).json(newWish[0]);
        } catch(error) {
            if(error.message = `duplicate key value violates unique constraint "user_wish_product_user_id_product_id_key`){
                response.status(500).send('Produit déjà dans votre WishList');
            } 
            response.status(500).send(error.message);
        }
    },
    
    deleteProduct: async (request, response) => {
        try {
            const productId = request.body.id;
            const userId = request.params.id;
            const deleteOneWish = new UserWishProduct();
            await deleteOneWish.removeProduct(productId, userId);
            response.status(200).json('produit supprimé des favoris');
        } catch (error) {
            response.status(500).send(error.message);
        }
    },
    
    deleteByUser: async (request, response) => {
        try {
            const userId = request.params.id;
            const deleteAllWish = new UserWishProduct();
            await deleteAllWish.removeWishList(userId);
            response.status(200).json('liste de souhaits supprimé');
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = wishListController