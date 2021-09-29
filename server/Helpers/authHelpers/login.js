const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');
const createSession = require('./createSession');

const login = (email,password,bcrypt,res) => {
    loginModel.findOne({email})
    .then(foundUser => {
        const userId = foundUser._id;
        const isValid = bcrypt.compareSync(password,foundUser.password);
        if (isValid) {
            sessionModel.findOne({userId}, (err, foundSession) => {
                if (foundSession) {
                    return res.status(200).send({authToken: foundSession._id})
                }
                if (!foundSession) {
                    createSession(foundUser,email,res)
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