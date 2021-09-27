const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');
const createSession = require('./createSession');

const login = (name,password,bcrypt,res) => {
    loginModel.findOne({name})
    .then(foundUser => {
        const userId = foundUser._id;
        if (foundUser) {
            sessionModel.findOne({userId}, (err, foundSession) => {
                if (foundSession) {
                    return res.status(200).send(foundSession._id)
                }
                if (!foundSession) {
                    createSession(foundUser,res)
                }
            })
        }
        else {
            return res.status(400).send('Error')
        }
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = login;