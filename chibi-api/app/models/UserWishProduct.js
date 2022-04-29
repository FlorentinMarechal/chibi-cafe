const db = require('../database');
const User = require('./User');

class UserWishProduct {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByUser(id) {
        try {
         const {rows} = await db.query(`SELECT * FROM wishlist WHERE user_id =$1`, [id]);   
         return rows.map(row => new UserWishProduct(row));
        }catch(error) {
            throw error;
        }
    }

    async insertProduct(userId, productId)  {
        try {
            await db.query('INSERT INTO "user_wish_product"("user_id", "product_id") VALUES($1, $2)', [userId, productId]);
        } catch(error) {
            throw error;
        }
    }

    async removeProduct(productId, user_id)  {
        try {
            await db.query('DELETE FROM "user_wish_product" WHERE "product_id" = $1 AND "user_id" = $2', [ productId, user_id]);
        } catch(error) {
            throw error;
        }
    }

    async removeWishList(userId)  {
        try {
            await db.query('DELETE FROM "user_wish_product" WHERE "user_id" = $1', [userId]);
        } catch(error) {
            throw error;
        }
    }
}

module.exports = UserWishProduct;