const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');

const createTeam = (userId,teamData,res) => {
    userModel.findById({_id:userId}, (err,userData) => {
        if (err | !userData) {
            return res.status(400).send('Error')
        }
        if (!userData.role) {
            return res.status(401).send('Unauthorized')
        }
        else {
            let data = userData.data;
            if (data.teams.current[0] === '') {
                data.teams.current.pop()
            }
            data.teams.current.push(teamData)
            data.teams.current[data.teams.current.length -1].members.push([userData.username,userId])
            userModel.findByIdAndUpdate(userId,{data}, (err, created) => {
                if (err | !created) {
                    return res.status(400).send('Error')
                }
                else {
                    teamModel.create({data:teamData})
                    .then(teamSuccess => {
                        return res.status(201).send('Success')
                    })
                    .catch((err) => {
                        return res.status(400).send('Error')
                    })
                }
            })
        }
    })
}

module.exports = createTeam;