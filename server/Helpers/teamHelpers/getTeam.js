const teamModel = require('../../Model/teamModel');

const getTeam = (userId,teamId,res) => {
    teamModel.findOne({teamId}, (err, foundTeam) => {
        if (err | !foundTeam) {
            return res.status(400).send('Error');
        }
        foundTeam.data.members.forEach(member => {
            if ( member[1] === userId) {
                return res.status(200).send(foundTeam);
            }
        })
    })
    return res.status(401).send('Unauthorized');
}

module.exports = getTeam;