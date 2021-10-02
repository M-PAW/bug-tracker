const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');

const createTeam = (userId,teamData,res) => {
    teamModel.create({data:teamData}, (err, created) => {
        if (err | !created) {
            return res.status(400).send('Error2')
        }
        else {
            userModel.findById({_id:userId}, (err, userData) => {
                if (err | !userData) {
                    return res.status(400).send('Error3')
                }
                else {
                    let data = userData.data;
                    data.teams.current.push(teamData)
                    userModel.findByIdAndUpdate(userId,{data})
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
}

module.exports = createTeam;