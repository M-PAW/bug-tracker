const sessionModel = require('../../Model/sessionModel');const signToken = require('./signToken');

const createSession = ({_id,name},res) => {
    const token = signToken(name);
    const id = _id;
    const time = new Date.now()
    const sessionObject = {
        _id: token,
        userId: id,
        created: time
    }
    console.log('Hit Pre DB');
    sessionModel.create(sessionObject)
    .then(newSession => {
        if (newSession) {
            return res.status(201).send(newSession._id)
        }
    })
    .catch((err) => {
        return res.status(400).send('Error3')
    })
}

module.exports = createSession;