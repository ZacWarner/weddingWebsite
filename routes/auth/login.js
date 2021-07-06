require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const login = (req, res) => {

    const { email, password } = req.body;

    User.findOne({ email: email }).then(async (res) => {

        console.log(res)
    }).catch((err) => {
        console.log(err);
    });


};

module.exports = login;