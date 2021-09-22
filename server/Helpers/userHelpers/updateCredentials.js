const loginModel = require('../../Model/loginModel');

const updateCredentials = (name,password,res) => {
    loginModel.findByIdAndUpdate({name,password})
    .then(updated => {
        return res.status(201).send('Success');
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = updateCredentials;