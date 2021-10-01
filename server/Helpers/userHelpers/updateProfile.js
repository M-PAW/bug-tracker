const sessionModel = require('../../Model/sessionModel');
const userModel = require('../../Model/userModel');

const updateProfile = (authToken,userId, data, res) => {
    sessionModel.findOne({_id:authToken}, (err, session) => {
        if (err | !session){
            return res.status(401).send('Unauthorized')
        }
        else {
            if (session.userId === userId) {
                userModel.findByIdAndUpdate(userId,{data})
                .then(updated => {
                    return res.status(201).send('Success')
                })
                .catch((err) => {
                    return res.status(400).send('Error')
                })
            }
            else {
                return res.status(401).send('Unauthorized')
            }
        }
    })
}

module.exports = updateProfile;