const userModel = require('../../Model/userModel');

const getUser = (userId, res) => {
    userModel.findOne({userId})
    .then(userData => {
        const responseObject = {
            userId: userData.userId,
            role: userData.role,
            data: userData.data
        }
        return res.status(200).send(responseObject)
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = getUser;