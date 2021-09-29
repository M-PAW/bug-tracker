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
const logout = require('../../Helpers/authHelpers/logout');

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

// Logout
authRouter.post('/logout', (req,res) => {
    const authToken = req.body.authToken;
    if (!authToken){
        return res.status(400).send('Error')
    }
    else {
        logout(authToken,res)
    }
})

// Update Credentials
authRouter.put('/update', (req,res) => {
    const {authToken,name, oldPassword, newPassword, hash} = req.body;
    updateCredentials(authToken,name,oldPassword,newPassword,bcrypt, salt,res);
})

module.exports = authRouter;