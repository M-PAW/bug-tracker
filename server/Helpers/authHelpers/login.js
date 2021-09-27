const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');
const createSession = require('./createSession');

const login = (name,password,bcrypt,res) => {
    loginModel.findOne({name})
    .then(found => {
        const userId = found._id;
        if (found) {
            sessionModel.findOne({userId}, (err, foundSession) => {
                if (foundSession) {
                    return res.status(200).send(foundSession._id)
                }
                if (!foundSession) {
                    createSession(found,res)
                }
            })
        }
        else {
            return res.status(400).send('Error1')
        }
    })
    .catch((err) => {
        return res.status(400).send('Error2')
    })
}

module.exports = login;