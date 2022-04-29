const Product = require('../models/Product');

const productController = {

    findAll: async (_, response) => {
        try {
            const products = await Product.findAll();
            response.status(200).json(products);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    findOne: async (request, response) => {
        try {
            const product = await Product.findOne(request.body);
            if(!product) response.status(200).json('Aucuns produit trouvé avec cet id');
            response.status(200).json(product);           
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    update: async (request, response) => {
        try {
            const updateProduct = new Product(request.body);
            await updateProduct.update();
            response.status(200).json(updateProduct);   
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },
    create: async (request, response) => {
        try {
            const newProduct = new Product(request.body);
            await newProduct.create();
            response.status(200).json(newProduct);           
        }catch(error) {
            response.status(500).send(error.message);   
        }
    }
}

module.exports = productController;