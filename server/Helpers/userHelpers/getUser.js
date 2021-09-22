const userModel = require('../../Model/userModel');

const getUser = (_id, res) => {
    userModel.findOne({_id})
    .then(userData => {
        return res.status(200).send(userData);
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = getUser;