const route = require('express').Router();
const userModel = require('../../Model/userModel');

route.post('/user', (req,res) => {
    userModel.create(req.body)
    .then((user) => {
        
        if (!user) {
            return res.status(400).send('There was an error.');
        }
        return res.status(201).send('Created User')
    })
    .catch(err => res.status(400).send(err));
})

route
    .put('/user', (req,res) => {
        const {_id,name,password,role} = req.body;
        userModel.findByIdAndUpdate(_id, {name,password,role})
        .then((user) => {
            if (!user) return res.status(400).send('No Such User');
            res.send('Update Success');
        })
        .catch(err => {
            if (err) res.status(400).send(err)
        })

    })
    .post('/', (req,res) => {
        userModel.findOne(req.body)
        .then((user) => {
            if(!user) return res.status(400).send('Incorrect email or password')
            res.cookie('user', user)
            res.send(true)
        })
        .catch(err => {
            if (err) res.status(400).send(err)
        })
    })
    .get('/', (req,res) => {
        userModel.find()
        .then((user) => {
            if (!user) return res.status(400).send('No such user')
            res.status(200).send(user)
        })
        .catch(err => {
            if(err) res.status(400).send(err)
        })
    })

module.exports = route;