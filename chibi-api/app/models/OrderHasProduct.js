const db = require('../database');

class OrderHasProduct {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    async create(order, product, quantity) {
        try {
            await db.query('INSERT INTO "order_has_product" ("order_id", "product_id", "quantity") VALUES ($1, $2, $3)', [order, product, quantity]);

        } catch(error) {
            throw error;
        }
    }
}

module.exports = OrderHasProduct