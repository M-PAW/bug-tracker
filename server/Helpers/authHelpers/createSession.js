const sessionModel = require('../../Model/sessionModel');
const signToken = require('./signToken');

const createSession = (_id, userId,email,res) => {
    const token = signToken(email);
    const id = _id;
    const time = Date.now()
    const sessionObject = {
        _id: token,
        userId: id,
        created: time
    }
    sessionModel.create(sessionObject)
    .then(newSession => {
        if (newSession) {
            return res.status(201).json({authToken:newSession._id,userId:userId})
        }
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = createSession;