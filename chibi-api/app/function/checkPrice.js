const Product = require('../models/Product');

const checkPrice = async (cart) => {
    // console.log('enter in checkprice');
    const tabCart = [];
        for(const item of cart){
            const quantity = item.quantity;
            const price = await Product.findOne(item.id);
            const amount = (quantity * (price.price_without_taxes * price.taxe).toFixed(2));
            // console.log('amout', amount);
            tabCart.push(amount);
            // console.log('tabCart ', tabCart);
        }
        const cartAmount = tabCart.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);
        // console.log('cartAmoutLog : ', cartAmount);
    return cartAmount;
}

module.exports = checkPrice;