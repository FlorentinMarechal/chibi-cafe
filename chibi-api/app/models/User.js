const db = require('../database');

class User {

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName]; 
        }
    }
    static async findOneId(id) {
        try {
            const {rows} = await db.query('SELECT "mail", "first_name", "last_name", "gender", "birthday_date", "phone_number", "principal_street_number", "principal_name_of_the_road", "principal_postal_code", "principal_city" FROM "user" WHERE "id"=$1', [id]);
            if(rows[0]) {
                return new User(rows[0]);
            }
        } catch(error) {
            throw error;
        }
    }

    static async findOneMail(mail) {
        try {
            const {rows} = await db.query('SELECT id, "mail", "first_name", "last_name", "gender", "birthday_date", "phone_number", "principal_street_number", "principal_name_of_the_road", "principal_postal_code", "principal_city" FROM "user" WHERE "mail"=$1', [mail]);
            if(rows[0]) {
                return new User(rows[0]);
            }
        }catch(error) {
            throw error;
        }
    }    
    
    async update(id) {
        try {
            await db.query('UPDATE "user" SET "mail"=$1, "first_name"=$2, "last_name"=$3, "gender"=$4, "birthday_date"=$5, "phone_number"=$6, "principal_street_number"=$7, "principal_name_of_the_road"=$8, "principal_postal_code"=$9, "principal_city"=$10 WHERE "id"=$11;', [this.mail, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.principal_street_number, this.principal_name_of_the_road, this.principal_postal_code, this.principal_city, id]);
        }catch(error) {
            throw error;
        }
    }

    async create() {
        try {
            await db.query('INSERT INTO "user" ("mail", "password", "first_name", "last_name", "gender", "birthday_date", "phone_number", "principal_street_number", "principal_name_of_the_road", "principal_postal_code", "principal_city") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);', [this.mail, this.password, this.first_name, this.last_name, this.gender, this.birthday_date, this.phone_number, this.principal_street_number, this.principal_name_of_the_road, this.principal_postal_code, this.principal_city]);
        }catch(error) {
            throw error;
        }
    }

    static async checkMail(mail) {
        try {
            const {rows} = await db.query('SELECT "mail", "password" FROM "user" WHERE mail=$1', [mail]);
            if(rows[0]) {
                return new User(rows[0]);
            }
        }catch(error) {
            throw error;
        }
    }  

    async delete(id) {
        try {
            await db.query('DELETE FROM "user" WHERE id=$1', [id]);
        } catch (error) {
            throw error;
        }
    }

    async updatePassword(password, mail) {
        try {
            await db.query('UPDATE "user" SET "password"=$1 WHERE "mail"=$2', [password, mail]);
        } catch(error) {
            throw error;
        }
    }

}


/*
SUPPRIME LES INFOS UTILISATEUR
A PARTIR DE user_id SUPPRIMER LES COMMANDES dans order
DELETE FROM user WHERE id IN (
    SELECT * FROM order WHERE order_id IN (
       SELECT * FROM order_has_product
    )
)
*/

module.exports = User;