const userModel = require('../../Model/userModel');
const teamModel = require('../../Model/teamModel');

const retireTeam = (userId,teamId,res) => {

    let userData = {};

    userModel.findOne({userId}, (err,user) => {
        if (err | !user) {
            return res.status(400).send('Error0');
        }
        if (user.role) {
            teamModel.findOne({teamId}, (err, team) => {
                if (err | !team) {
                    return res.status(400).send('Error1')
                }
                else{
                    team.data.members.forEach(member => {
                        if (member[1] === userId) {
                            return;
                        }
                        else {
                            return res.status(401).send('Unauthorized1');
                        }
                    })
                    teamModel.findOne({teamId}, (err, team) => {
                        if (err | !team) {
                            return res.status(400).send('Error2');
                        }
                        else {
                            team.data.members.forEach(member => {
                                const userId = member[1];
                                userModel.findOne({userId}, (err, user) => {
                                    if (err | !user) {
                                        return res.status(400).send('Error3');
                                    }
                                    else {
                                        userData = user.data;
                                        let tempStorage = userData.teams.current;
                                        userData.teams.current = [];
                                        userData.teams.past.push(tempStorage);
                                        userModel.findOneAndUpdate(userId,{data:userData}, (err, updateSuccess) => {
                                            if (err | !updateSuccess) {
                                                return  res.status(400).send('Error');
                                            }
                                            else {
                                                teamModel.findOneAndUpdate(teamId,{status:'retired'})
                                                .then(success => {
                                                    return res.status(201).send('Success')
                                                })
                                                .catch((err) => {
                                                    return res.status(400).send('Error4')
                                                })
                                            }
                                        })
                                    }
                                })
                            })

                        }
                    })
                }

            })
            
        }
        else {
            return res.status(401).send('Unauthorized2');
        }
        
    })

}

module.exports = retireTeam;