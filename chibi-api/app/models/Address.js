const { bindComplete } = require('pg-protocol/dist/messages');
const db = require('../database');

class Address {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByUser(id) {
        try {
         const {rows} = await db.query('SELECT * FROM "address" WHERE user_id = $1', [id]);   
         return rows.map(row => new Address(row));
        }catch(error) {
            throw error;
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "address"("first_name", "last_name", "phone_number", "street_number", "name_of_the_road", "postal_code", "city", "user_id") VALUES($1, $2, $3, $4, $5, $6, $7, $8)RETURNING *', [this.first_name, this.last_name, this.phone_number, this.street_number, this.name_of_the_road, this.postal_code, this.city, this.user_id]);
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            await db.query('DELETE FROM "address" WHERE id=$1', [id]);
        } catch (error) {
            throw error;
        }
    }
    async update(id) {
        try {
            await db.query('UPDATE "address" SET "first_name"=$1, "last_name"=$2, "phone_number"=$3, "street_number"=$4, "name_of_the_road"=$5, "postal_code"=$6, "city"=$7 WHERE id=$8', [this.first_name, this.last_name, this.phone_number, this.street_number, this.name_of_the_road, this.postal_code, this.city, id]);
        } catch(error) {
            throw error;
        }
    }
}

module.exports = Address;