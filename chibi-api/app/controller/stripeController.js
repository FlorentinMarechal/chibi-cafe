const stripe = require('stripe')(process.env.STRIPE_TOKEN);
//mettre la "sk_test" (clé privé) dans le .env;
const checkPrice = require('../function/checkPrice');

// const YOUR_DOMAIN = 'http://localhost:4242';

const stripeController = {
    payment: async (request, response) => {
        try {
            const {cart, id} = request.body;
            const priceTTC = await checkPrice(cart);
            
            const payment = await stripe.paymentIntents.create({
                  amount: Math.round(priceTTC*100),
                  currency: "eur",
                  payment_method: id,
                  confirm: true
                });
            response.json({
                message: "Paiement validé",
                success: true
              });
        } catch (error) {
            response.json({
                message: "Paiement décliné",
                success: false
            })
        }
    }
}

module.exports = stripeController;