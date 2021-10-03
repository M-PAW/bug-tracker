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
                teamModel.findByIdAndUpdate
            }
        }
    })
};

module.exports = updateTeam;