const userModel = require('../../Model/userModel');
const teamModel = require('../../Model/teamModel');

const retireTeam = (userId,teamId,res) => {

    let userData = {};
    let memberList = [];
    let count = 0;

    userModel.findOne({userId}, (err,user) => {
        if (err) {
            return res.status(400).send('Error');
        }
        if (!user) {
            return res.status(401).send('Unauthorized');
        }
        else {
            if (user.data.teams.current[0][1] === undefined) {
                return res.status(400).send('No current team')
            }
            if (!user.role) {
                return res.status(401).send('Unauthorized')
            }
            else {
                // Check if user is in team
                teamModel.findOne({teamId}, (err,team) => {
                    if (err | !team) {
                        return res.status(400).send('Error2');
                    }
                    // Set Vars
                    count = 0;
                    memberList = team.data.members;
                    do {
                        if (userId == team.data.members[count][1]) {
                            break;
                        }
                        else {
                            count++;
                        }
                    } while (count < memberList.length)
                    if (count === memberList.length) {
                        return res.status(401).send('Unauthorized')
                    }
                    else {
                        // Update team to retired
                        const retiredStatus = 'retired';
                         teamModel.findOneAndUpdate(teamId,{status:retiredStatus}, (err, success) => {
                            if (err | !success) {
                                return res.status(400).send('Error3');
                            }
                            else {
                                // Loop through members and update current/past teams
                                count = 0;
                                memberList.forEach(member => {
                                    const userId = member[1];
                                    userModel.findOne({userId}, (err,user) => {
                                        if (err | !user) {
                                            return res.status(400).send('Error4');
                                        }
                                        // set userData using user.data
                                        userData = user.data;
                                        // create temp storage for current team
                                        const tempStorage = userData.teams.current;
                                        // clear current team
                                        userData.teams.current = [];
                                        // move tempStorage to past teams
                                        userData.teams.past.push(tempStorage);
                                        userModel.findOneAndUpdate(userId, {data:userData}, (err, success) => {
                                            if (err | !success) {
                                                return res.status(400).send('Error5')
                                            }
                                            if (success) {
                                                count++;
                                            }
                                        })
                                    })
                                })
                                if (count == memberList.length-1) {
                                    return res.status(201).send('Success');
                                }
                                else {
                                    return res.status(400).send('Error6');
                                }
                            }
                         })
                    }
                })
            }

        }
    })

}

module.exports = retireTeam;