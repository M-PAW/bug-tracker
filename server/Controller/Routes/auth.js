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
    const {email, password} = req.body;
    const hash = bcrypt.hashSync(password, salt)
    register(email,hash,res);
})

// Login User
authRouter.post('/login', (req,res) => {
    const {email,password} = req.body;
    if (!email | !password) {
        return res.status(400).send('Error')
    }
    else {
        login(email,password,bcrypt,res)
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

// Update Password
authRouter.put('/update', (req,res) => {
    const {authToken,oldPassword,newPassword} = req.body;
    if (!authToken | !oldPassword | !newPassword) {
        return res.status(400).send('Error')
    }
    else {
        updateCredentials(authToken,oldPassword,newPassword,bcrypt, salt,res);
    }
})

module.exports = authRouter;