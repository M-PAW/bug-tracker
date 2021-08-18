const route = require('express').Router();
const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(14);
const mongoose = require('mongoose');
const shortUUID = require('short-uuid');
const session = require('express-session');

// Register User
route.post('/register', (req,res) => {
    const {name, password} = req.body;
    const hash = bcrypt.hashSync(password, salt)
    const id = shortUUID.generate();
    const loginItem = {
        name: name,
        password: hash,
        id: id
    }
    const userItem = {
        id: id,
        data: {
            name: name,
            teams: {
                past: [],
                current: ''
            },
            bugs: [],
        }
    }

    loginModel.findOne({name})
    .then((found) => {
        if (found) {
            return res.status(400).send('There was an error, no dup.')
        }

        loginModel.create(loginItem)
        .then((login) => {

            userModel.create(userItem)
            .then((user) => {
                if (user) {

                return res.status(201).send({
                    status:'success'
                })}
            })
            .catch((err) => {
                return  res.status(400).send('There was an error.')
            })

        })
        .catch(err => res.status(400).send(err));
    })

    
})


// Update User
// Login User
// Get User
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