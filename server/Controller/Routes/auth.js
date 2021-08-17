const route = require('express').Router();
const loginModel = require('../../Model/loginModel');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(14);


// Create User
route.post('/user', (req,res) => {
    loginModel.create(req.body)
    .then((user) => {
        
        if (!user) {
            return res.status(400).send('There was an error.');
        }
        return res.status(201).send('Created User')
    })
    .catch(err => res.status(400).send(err));
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
    .get('/', (req,res) => {
        loginModel.find()
        .then((user) => {
            if (!user) return res.status(400).send('No such user')
            res.status(200).send(user)
        })
        .catch(err => {
            if(err) res.status(400).send(err)
        })
    })

module.exports = route;