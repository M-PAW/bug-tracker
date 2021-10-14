const shortUUID = require('short-uuid');
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');

const createTeam = (userId,teamName,res) => {
    userModel.findOne({userId}, (err,user) => {
        if (err | !user) {
            return res.status(400).send('Error')
        }
        if (!user.role) {
            return res.status(401).send('Unauthorized')
        }
        if (user.data.teams.current[0] === '') {
            user.data.teams.current.pop();
        }
        if (user.data.teams.current.length > 0) {
            return res.status(400).send('Limit Reached')
        }
        if (user.data.teams.past.length > 0){
            // user.data.teams.past.forEach(team => {
            //     if (team[0] === teamName) {
            //         return res.status(400).send('Unavailable');
            //     }
            // });
            let count = 0;
            while (count < user.data.teams.past.length) {
                if (user.data.teams.past[count][0] === teamName) {
                    return res.status(400).send('Unavailable')
                }
                count++;
            }
            if (count === user.data.teams.past.length) {
                let teamId = shortUUID.generate();
                let userName = user.data.username;
                let userData = user.data;
                if (userData.teams.current[0] === '') {
                    userData.teams.current.pop()
                }
                const teamObject = {
                    teamId: teamId,
                    status: "active",
                    data: {
                        team: teamName,
                        members: [[userName,userId]],
                        queue: []
                    }
                }
         
                userData.teams.current.push(teamName)
                userData.teams.current.push(teamId);
                userModel.findOneAndUpdate(userId,{data:userData}, (err, created) => {
                    if (err | !created) {
                        return res.status(400).send('Error')
                    }
                    else {
                        teamModel.create(teamObject)
                        .then(teamSuccess => {
                            return res.status(201).send('Success')
                        })
                        .catch((err) => {
                            return res.status(400).send('Error')
                        })
        
                    }
                })
            }
        }
        
    })
}

module.exports = createTeam;