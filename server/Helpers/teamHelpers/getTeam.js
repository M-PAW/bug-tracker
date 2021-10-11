const teamModel = require('../../Model/teamModel');

const getTeam = (userId,teamId,res) => {
    teamModel.findOne({teamId}, (err, foundTeam) => {
        if (err | !foundTeam) {
            return res.status(400).send('Error');
        }
        if (foundTeam) {
            let isValid = false;
            foundTeam.data.members.forEach(member => {
                if ( member[1] === userId) {
                    isValid = true;
                    return;
                }
            })
            if (isValid) {
                return res.status(200).send(foundTeam);
            }
            else {
                return res.status(401).send('Unauthorized');
            }
        }
    })
}

module.exports = getTeam;