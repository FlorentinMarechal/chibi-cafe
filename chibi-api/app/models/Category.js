const db = require('../database');

class Category {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
         const {rows} = await db.query(`
         SELECT category.*, 
         ARRAY_AGG (
            product.product_name
         )
         FROM "category" 
         JOIN "product" ON (category_id=category.id)
         GROUP BY category.id`);   
         return rows.map(row => new Category(row));
        }catch(error) {
            throw error;
        }
    }
}

module.exports = Category;