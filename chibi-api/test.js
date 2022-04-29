// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'chib1234';

// // bcrypt.genSalt(saltRounds, function(err, salt) {
// //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
// //         return crypted = hash;
// //     });
// // });

// // console.log(crypted);

// // bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
// //     console.log(result);
// // })

// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// console.log(hash);

// console.log(bcrypt.compareSync("abc", hash));

require("dotenv").config();
const jwt = require ("jsonwebtoken");

// function generateToken(request, response, next) {

//     jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '20s'});

//     console.log(generateToken());

// }

const user = {
    mail: 'abc@fde.fr',
    password: 'Chibi1234'
}

function generateToken(user) {
    return jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10s'});
}

console.log("Access token : ",generateToken());

