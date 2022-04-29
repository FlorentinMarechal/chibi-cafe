const checkPrice = require('../function/checkPrice');

const cartController = {

    priceConfirmation: async (request, response) => {
        try {
            console.log("enter");
            const cart = request.body.state.shop.cart;
            console.log("cart :",cart);
            const cartAmount = await checkPrice(cart);
            response.status(200).json(cartAmount);
        } catch(error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = cartController;


/*
[28,91, 12,85, ..]

RECUPERER ID + QUANTITY DANS SHOP -> CART
FINDONE PAR ID POUR TROUVER LE PRIX
MULTIPLIER LE PRIX PAR LA QUANTITE POUR CHAQUE LIGNE
RENVOYER LE SOUS TOTAL
*/