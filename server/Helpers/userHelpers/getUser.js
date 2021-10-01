const userModel = require('../../Model/userModel');
const loginModel = require('../../Model/loginModel');

const getUser = (userId, res) => {
    userModel.findOne({_id:userId})
    .then(userData => {
        return res.status(200).send(userData)
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = getUser;