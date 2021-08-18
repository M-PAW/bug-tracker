const route = require('express').Router();
const userModel = require('../../Model/userModel');


// Get User
route.get('/', (req,res) => {
    const {id} = req.body;

    userModel.findOne({id})
    .then(userData => {
        if (userData) {
            return res.status(200).send(userData)
        }
    })
    .catch((err) => {
        return res.status(400).send('Unable to get user')
    })
})

// Update User
route.put('/', (req,res) => {
    
})

module.exports = route;