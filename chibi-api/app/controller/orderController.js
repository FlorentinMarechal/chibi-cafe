const Order = require('../models/Order');
const OrderHasProduct = require('../models/OrderHasProduct');
const Address = require('../models/Address');
const checkPrice = require('../function/checkPrice');
const nodemailer = require('nodemailer');
var dayjs = require('dayjs');
require('dayjs/locale/fr');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const oderController = {

    create: async (request, response) => {
        try {

            // GESTION D'INSERTION DANS LA TABLE ORDER
            const deliveryInfoRequest = request.body.state.delivery.deliveryAddress;
            const userInfo = request.body.state.auth.user;
            const cart = request.body.state.shop.cart;

            const cartAmount = await checkPrice(cart);
            const deliveryInfo = {
                
                total: cartAmount,   
                first_name: deliveryInfoRequest.first_name,
                last_name: deliveryInfoRequest.last_name,
                mail: deliveryInfoRequest.mail,
                phone_number: deliveryInfoRequest.phone_number,          
                street_number: deliveryInfoRequest.street_number,
                name_of_the_road: deliveryInfoRequest.name_of_the_road,
                postal_code: deliveryInfoRequest.postal_code,
                city: deliveryInfoRequest.city,
                user_id: userInfo.id
            };         

            const {isNewAddress} = request.body.state.delivery;

            if(isNewAddress) {
                console.log();
                const newAddress = new Address(deliveryInfo);
                await newAddress.create();
            }
            
            const newOrder = new Order(deliveryInfo);
            const createdOrder = await newOrder.create();
         
            // GESTION D'INSERTION DANS LA TABLE Order_has_Product
            
            const orderId = createdOrder.id;

            for(const item of cart) {
                const newOrderHasProduct = new OrderHasProduct();
                await newOrderHasProduct.create(orderId, item.id, item.quantity);

            }
            
            // ENVOIE DU MAIL DE CONFIRMATION 
            const transporter = nodemailer.createTransport({
                host:'smtp.gmail.com',
                 port: 465,  //25,
                secure: false,
                 service:'gmail',
                 auth: {
                   user:"chibi.test3@gmail.com",
                   pass:"Chibi12345"
                },
                tls: {
                    rejectUnauthorized: false
                },
            });

            transporter.use('compile', hbs({
                viewEngine: {
                    extName: ".handlebars",
                    partialsDir: path.resolve(__dirname, "..","public","views"),
                    defaultLayout: false,
                  },
                  viewPath: path.resolve(__dirname, "..","public","views"),
                  extName: ".handlebars",
            }));

            const mailOrderDate = dayjs().locale('fr').format('DD MMMM YYYY');
            var mailOptions = {
                from: 'chibi.test3@gmail.com', 
                  to: userInfo.mail,
                 subject: `Récapitulatif de commande n° ${createdOrder.id} sur CHIBI`, 
                 template: `mail`,
                 context: {
                    deliveryInfo,
                    mailOrderDate
                  }
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });

            // ENVOIE DE LA REPONSE 

            response.status(200).json(createdOrder);
        }catch(error) {
            response.status(500).send(error.message);   
        }
    },

    findByUser: async (request, response) => {
        try {
            const userOrder = await Order.findByUser(request.params.id);
            response.status(200).json(userOrder);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = oderController;