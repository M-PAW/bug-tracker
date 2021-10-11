const sessionModel = require('../../Model/sessionModel');
const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');
const teamModel = require('../../Model/teamModel');
const bcrypt = require('bcryptjs');

const deleteUser = (authToken,userId,password,res) => {
    sessionModel.findById({_id:authToken}, (err,session) => {
        if (err | !session) {
            return res.status(400).send('Error');
        }
        else {
            const _id = session.userId;
            loginModel.findById({_id}, (err, login) => {
                if (err | !login) {
                    return res.status(400).send('Error');
                }
                const isValid = bcrypt.compareSync(password, login.password);
                if (!isValid) {
                    return res.status(401).send('Unauthorized')
                }
                if (isValid) {
                    sessionModel.findByIdAndDelete({_id:authToken}, (err,sessionDeleted) => {
                        if (err | !sessionDeleted) {
                            return res.status(400).send('Error')
                        }
                        if (sessionDeleted) {
                            loginModel.findByIdAndDelete({_id}, (err, loginDeleted) => {
                                if (err | !loginDeleted) {
                                    return res.status(400).send('Error');
                                }
                                if (loginDeleted) {
                                    userModel.findById({_id}, (err,foundUser) => {
                                        if (err | !foundUser) {
                                            return res.status(400).send('Error');
                                        }
                                        if (foundUser) {

                                            const teamId = foundUser.data.teams.current[1];
                                            const userBugs = foundUser.data.bugs.current;
                                            

                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = deleteUser;