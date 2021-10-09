const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');

const updateTeam = (userId,teamId,teamData,res) => {
    userModel.findById({userId}, (err,foundUser) => {
        if (err | !foundUser) {
            return res.status(400).send('Error');
        }
        else {
            if (!foundUser.role) {
                return res.status(401).send('Unauthorized');
            }
            else {
                teamModel.findById({teamId}, (err, foundTeam) => {
                    if (err | !foundTeam) {
                        return res.status(400).send('Error')
                    }
                    else {
                        foundTeam.data.members.forEach(member => {
                            if (member[1] === userId) {
                                teamModel.findByIdAndUpdate(teamId,{data:teamData})
                                .then(success => {
                                    return res.status(201).send('Success');
                                })
                                .catch((err) => {
                                    return res.status(400).send('Error');
                                })
                            }
                        })
                    }
                })
                return res.status(401).send('Unauthorized');
            }
        }
    })
};

module.exports = updateTeam;