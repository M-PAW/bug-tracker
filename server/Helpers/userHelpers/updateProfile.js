const userModel = require('../../Model/userModel');

const updateProfile = (id, data, res) => {
    userModel.findByIdAndUpdate(id,{data})
    .then(userData => {
        return res.status(201).send(userData);
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = updateProfile;