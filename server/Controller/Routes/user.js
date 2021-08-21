const route = require('express').Router();
const userModel = require('../../Model/userModel');
const loginModel = require('../../Model/loginModel');


// Get User
route.get('/', (req,res) => {
    const {_id} = req.body;

    userModel.findOne({_id})
    .then(userData => {
        if (userData) {
            return res.status(200).send(userData)
        }
    })
    .catch((err) => {
        return res.status(400).send('Unable to get user')
    })
})

// Update User Credentials
route.put('/', (req,res) => {
    const {name, password} = req.body;
    loginModel.findOneAndUpdate({name,password})
    .then((login) => {
        res.status(201).send('Success');
    })
    .catch((err) => {
        res.status(400).send('Error');
    })
})

// Update User Profile
route.put('/profile', (req,res) => {
    const {id, data} = req.body;
    userModel.findOneAndUpdate({id,data})
    .then((user) => {
        res.status(201).send('Success');
    })
    .catch((err) => {
        res.status(400).send('Error')
    })
})

module.exports = route;