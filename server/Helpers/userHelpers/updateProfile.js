const sessionModel = require('../../Model/sessionModel');
const userModel = require('../../Model/userModel');

const updateProfile = (authToken,userId,data,res) => {
    sessionModel.findOne({_id:authToken}, (err, session) => {
        if (err | !session){
            return res.status(401).send('Unauthorized')
        }
        else {
            userModel.findOne({userId}, (err,foundUser) => {
                if (err | !foundUser) {
                    return res.status(400).send('Error');
                }
                if (session.userId == foundUser._id) {
                    const _id = foundUser._id;
                    userModel.findByIdAndUpdate(_id,{data})
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
            })

        }
    })
}

module.exports = updateProfile;