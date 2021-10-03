const teamRouter = require('express').Router();
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');
const shortUUID = require('short-uuid');

// Team Helpers
const getTeam = require('../../Helpers/teamHelpers/getTeam');
const createTeam = require('../../Helpers/teamHelpers/createTeam');
const updateTeam = require('../../Helpers/teamHelpers/updateTeam');

// Get Team
teamRouter.get('/', (req,res) => {
    const {teamId} = req.body;
    if (!teamId) {
        res.status(400).send('Error')
    }
    else {
        getTeam(teamId,res)
    }
})

// Create Team
teamRouter.post('/create', (req,res) => {
    const {userId, teamData} = req.body;
    if (!userId | !teamData) {
        res.status(400).send('Error')
    }
    else {
        createTeam(userId,teamData,res);
    }
})

// Update Team
teamRouter.put('/update', (req,res) => {
    const {userId,teamId,teamData} = req.body;
    if (!userId | !teamId | !teamData) {
        res.status(400).send('Error')
    }
    updateTeam(userId,teamId,teamId,res)
})


module.exports = teamRouter;