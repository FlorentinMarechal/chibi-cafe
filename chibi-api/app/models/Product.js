const db = require('../database');

class Product {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
         const {rows} = await db.query('SELECT * FROM "product"');   
         return rows.map(row => new Product(row));
        }catch(error) {
            throw error;
        }
    }

    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM product WHERE id=$1', [id]);
            if(rows[0]) {
                return new Product(rows[0]);
            }
        }catch(error) {
            throw error;   
        }
    }

    async update() {
        try {
            const {rows} = await db.query('UPDATE product SET "number"=$1, "type_of_product"=$2, "name"=$3, "picture"=$4, "description"=$5, "price_without_taxes"=$6, "taxe"=$7, "stock"=$8, "category_id"=$9', [this.number, this.type_of_product, this.name, this.picture, this.description, this.price_without_taxes, this.taxe, this.stock, this.category_id, this.id])
        }catch(error) {
            throw error;   
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO product("number", "type_of_product", "name", "picture", "description", "price_without_taxes", "taxe", "stock", "category_id") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', [this.number, this.type_of_product, this.name, this.picture, this.description, this.price_without_taxes, this.taxe, this.stock, this.category_id]);
        }catch(error) {
            throw error;
        }
    }

}

module.exports = Product;