const shortUUID = require('short-uuid');
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');

const createTeam = (userId,teamData,res) => {
    userModel.findById({_id:userId}, (err,userData) => {
        if (err | !userData) {
            return res.status(400).send('Error1')
        }
        if (!userData.role) {
            return res.status(401).send('Unauthorized')
        }
        if (userData.data.teams.current[0] === '') {
            userData.data.teams.current.pop();
        }
        if (userData.data.teams.current.length > 0) {
            return res.status(400).send('Limit Reached')
        }
        if (userData.data.teams.past.length > 0){
            userData.data.teams.past.forEach(team => {
                if (team.team === teamData.team) {
                    return res.status(400).send('Unavailable');
                }
            });
        }
        else {
            let teamId = shortUUID.generate();
            let data = userData.data;
            if (data.teams.current[0] === '') {
                data.teams.current.pop()
            }
            data.teams.current.push(teamData)
            // data.teams.current[data.teams.current.length -1].members.push([userData.username,userId])
            data.teams.current.push(teamId);
            userModel.findByIdAndUpdate(userId,{data}, (err, created) => {
                if (err | !created) {
                    return res.status(400).send('Error2')
                }
                else {
                    teamData[teamId] = teamId;
                    teamModel.create({data:teamData})
                    .then(teamSuccess => {
                        return res.status(201).send('Success')
                    })
                    .catch((err) => {
                        return res.status(400).send('Error3')
                    })

                }
            })
        }
    })
}

module.exports = createTeam;