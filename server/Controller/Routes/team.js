const teamRouter = require('express').Router();
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');
const shortUUID = require('short-uuid');

// Team Helpers
const getTeam = require('../../Helpers/teamHelpers/getTeam');
const createTeam = require('../../Helpers/teamHelpers/createTeam');
const updateTeam = require('../../Helpers/teamHelpers/updateTeam');
const retireTeam = require('../../Helpers/teamHelpers/retireTeam');
const addBugToQueue = require('../../Helpers/teamHelpers/addBugToQueue');
const assignBug = require('../../Helpers/teamHelpers/assignBug');

// Get Team
teamRouter.get('/', (req,res) => {
    const {userId,teamId} = req.body;
    if (!teamId) {
        res.status(400).send('Error');
    }
    else {
        getTeam(userId,teamId,res)
    }
})

// Create Team
teamRouter.post('/create', (req,res) => {
    const {userId, teamName} = req.body;
    if (!userId | !teamName) {
        res.status(400).send('Error');
    }
    else {
        createTeam(userId,teamName,res);
    }
})

// Update Team
teamRouter.put('/update', (req,res) => {
    const {userId,teamId,teamData} = req.body;
    if (!userId | !teamId | !teamData) {
        res.status(400).send('Error');
    }
    updateTeam(userId,teamId,teamId,res)
})

// Retire Team
teamRouter.put('/retire', (req,res) => {
    const {userId,teamId} = req.body;
    if (!userId | !teamId) {
        res.status(400).send('Error');
    }
    retireTeam(userId,teamId,res);
})

// Add bug to Queue
teamRouter.post('/add', (req,res) => {
    const {bug, teamId, userId} = req.body;
    if (!bug | !teamId | !userId) {
        res.status(400).send('Error');
    }
    addBugToQueue(bug,teamId,userId,res)
})

// Assign bug to User, Remove bug from Queue
teamRouter.post('/assign', (req,res) => {
    const {teamId,userId,bugId} = req.body;
    if (!teamId | !userId){
        res.status(400).send('Error')
    }
    assignBug(teamId,userId,bugId);
})

module.exports = teamRouter;