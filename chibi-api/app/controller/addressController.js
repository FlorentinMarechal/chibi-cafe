const { response } = require('express');
const Address = require('../models/Address');

const addressController = {
    
    findAdressByUser: async (request, response) => {
        try {
            const {id} = request.params;
            const userOrder = await Address.findByUser(id);
            response.status(200).json(userOrder);
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    deleteAddress: async (request, response) => {
        try {
            const {id} = request.params;
            const deleteAddress = new Address();
            await deleteAddress.delete(id);
            response.status(200).json("Adresse suprimmée");
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    updateAddress: async (request, response) => {
        try {
            const updatedAddress = new Address(request.body);
            await updatedAddress.update(request.params.id);
            response.status(200).json("Changement effectué");
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    newAddress: async (request, response) => {
        try {
            const newAddress = new Address(request.body);
            await newAddress.create();
            response.status(200).json(newAddress);
        } catch(error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = addressController;