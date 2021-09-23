const loginModel = require('../../Model/loginModel');

const updateCredentials = (id,name,password,res) => {
    loginModel.findByIdAndUpdate(id,{name,password})
    .then(updated => {
        return res.status(201).send('Success');
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = updateCredentials;