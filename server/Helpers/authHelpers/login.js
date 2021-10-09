const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');
const userModel = require('../../Model/userModel');
const createSession = require('./createSession');

const login = (email,password,bcrypt,res) => {
    loginModel.findOne({email})
    .then(foundLogin => {
        const id = foundLogin._id;
        const isValid = bcrypt.compareSync(password,foundLogin.password);
        if (isValid) {
            userModel.findById({_id:id}, (err, user) => {
                const userId = user.userId;
                if (err | !user) {
                    return res.status(400).send('Error');
                }
                else {
                    sessionModel.findOne({userId:id}, (err, foundSession) => {
                        if (err) {
                            return res.status(400).send('Error3');
                        }
                        if (foundSession) {
                            return res.status(200).send({authToken: foundSession._id, userId:userId})
                        }
                        if (!foundSession) {
                            createSession(id,userId,email,res)
                        }
                    })
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