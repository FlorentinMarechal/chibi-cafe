const jwt = require("jsonwebtoken");
const User = require('../models/User'); 
const bcrypt = require("bcrypt");

const tokenMW = {

    generateToken: async (request, response, next) => {
        const userInfo = request.body;
        const result = await User.checkMail(userInfo.mail);
        if(!result) response.status(200).json(`Email ou mot de passe incorrect`);
        const isTrue = bcrypt.compareSync(userInfo.password, result.password);
        const userInfoToken = {mail:userInfo.mail};
        if(isTrue) {
            accessToken = jwt.sign(userInfoToken, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '600000s'});
        }
        else response.status(200).json('Email ou mot de passe incorrect');
        next();
    },

    authenticateToken: (request, response, next) => {
        const authHeader = request.headers['authorization'];
        console.log('authHeaderLog : ', authHeader);
        const token = authHeader && authHeader.split(' ')[1];
        console.log('tokenLog : ', token);
        if(!token){
            response.status(200).json('Connexion refusé, temps de connexion expiré');
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    }
}

module.exports = tokenMW