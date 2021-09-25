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

// Login User
authRouter.post('/login', (req,res) => {
    const {name,password} = req.body;
    if (!name | !password) {
        return res.status(400).send('Error')
    }
    loginModel.findOne({name})
    .then(user => {
        const auth = bcrypt.compareSync(password, user.password)
        console.log(auth);
        if (auth) {
            return res.status(200).send('Success')
        }
        else {
            return res.status(400).send('Error')
        }
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
})

// Update User Credentials
authRouter.put('/update', (req,res) => {
    const {_id,name, password} = req.body;
    const hash = bcrypt.hashSync(password,salt)
    updateCredentials(_id,name,hash,res);
})


// Update User
// Login User
authRouter
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

module.exports = authRouter;