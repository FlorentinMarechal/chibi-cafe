const Category = require('../models/Category');

const categoryController = {

    findAll: async (_, response) => {
        try {
            const category = await Category.findAll();
            response.status(200).json(category);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

module.exports = categoryController;