const sessionModel = require('../../Model/sessionModel');
const signToken = require('./signToken');

const createSession = ({_id},email,res) => {
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
            return res.status(201).send({authToken:newSession._id})
        }
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = createSession;