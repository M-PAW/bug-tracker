const authRouter = require('express').Router();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(14);
const mongoose = require('mongoose');
const shortUUID = require('short-uuid');
const session = require('express-session');

// authRouter-Helpers
const register = require('../../Helpers/authHelpers/register');
const updateCredentials = require('../../Helpers/authHelpers/updateCredentials');
const login = require('../../Helpers/authHelpers/login');

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
    else {
        login(name,password,bcrypt,res)
    }
})

// Update Credentials
authRouter.put('/update', (req,res) => {
    const {_id,name, password} = req.body;
    const hash = bcrypt.hashSync(password,salt)
    updateCredentials(_id,name,hash,res);
})

module.exports = authRouter;