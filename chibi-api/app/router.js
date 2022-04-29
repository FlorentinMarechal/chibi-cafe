const {Router} = require('express');

// CONTROLLER

const productController = require('./controller/productController');
const userController = require('./controller/userController');
const categoryController = require('./controller/categoryController');
const oderController = require('./controller/orderController');
const stripeController = require('./controller/stripeController');
const wishListController = require('./controller/wishListController');
const addressController = require('./controller/addressController')
const cartController = require('./controller/cartController');

// MIDDLEWARES

const tokenMW = require('./middleswares/tokenMW');


const router = Router();

// PRODUITS
router.get('/products', productController.findAll);

// PRODUIT

router.get('/product/:id', productController.findOne);
router.post('/product/:id', productController.create);
router.patch('/product/:id', productController.update);

// USER

router.get('/account/:id', tokenMW.authenticateToken, userController.findOne);

router.patch('/account/:id', tokenMW.authenticateToken, userController.update);
router.patch('/newPassword', tokenMW.authenticateToken, userController.updatePassword);

router.post('/login', tokenMW.generateToken, userController.login);
router.post('/SignUp', userController.create);

router.delete('/account/:id', userController.delete);

// CATEGORY - TEST

router.get('/category', categoryController.findAll);

// ORDER

router.get('/accountOrder/:id', tokenMW.authenticateToken, oderController.findByUser);
router.post('/order', oderController.create);

// CART 
router.post('/checkPrice', cartController.priceConfirmation);

// PAIEMENT STRIPE
router.post('/createCheckoutSession', stripeController.payment); //tokenMW.authenticateToken ??

// WISHLIST

router.get('/wishList/:id', tokenMW.authenticateToken, wishListController.findByUser);
router.delete('/wishList/:id', tokenMW.authenticateToken, wishListController.deleteByUser);

router.post('/useWishList/:id', tokenMW.authenticateToken, wishListController.addProduct);
router.delete('/useWishList/:id', tokenMW.authenticateToken, wishListController.deleteProduct);

// ADDRESS

router.post('/newAddress', tokenMW.authenticateToken, addressController.newAddress);
router.get('/address/:id', tokenMW.authenticateToken, addressController.findAdressByUser);
router.delete('/address/:id', tokenMW.authenticateToken, addressController.deleteAddress);
router.patch('/address/:id', tokenMW.authenticateToken, addressController.updateAddress);

module.exports = router;