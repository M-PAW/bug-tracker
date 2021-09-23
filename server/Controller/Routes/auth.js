const authRouter = require('express').Router();
const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(14);
const mongoose = require('mongoose');
const shortUUID = require('short-uuid');
const session = require('express-session');

// authRouter-Helpers
const register = require('../../Helpers/authHelpers/register');
const updateCredentials = require('../../Helpers/authHelpers/updateCredentials');

// Register User
authRouter.post('/register', (req,res) => {
    const {name, password} = req.body;
    const hash = bcrypt.hashSync(password, salt)
    register(name,hash,res);
})

authRouter.put('/update', (req,res) => {
    const {_id,name, password} = req.body;
    const hash = bcrypt.hashSync(password,salt)
    updateCredentials(_id,name,hash,res);
})


// Update User
// Login User
route
    .put('/user', (req,res) => {
        const {_id,name,password,role} = req.body;
        loginModel.findByIdAndUpdate(_id, {name,password,role})
        .then((user) => {
            if (!user) return res.status(400).send('No Such User');
            res.send('Update Success');
        })
        .catch(err => {
            if (err) res.status(400).send(err)
        })

    })
    .post('/', (req,res) => {
        console.log(req.body)
        loginModel.findOne(req.body)
        .then((user) => {
            console.log(user)
            if(!user) return res.status(400).send('Incorrect email or password')
            res.cookie('user', user)
            res.send(true)
        })
        .catch(err => {
            if (err) res.status(400).send(err)
        })
    })

module.exports = route;