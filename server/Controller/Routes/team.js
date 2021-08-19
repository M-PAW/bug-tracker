const route = require('express').Router();
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');
const shortUUID = require('short-uuid');

// Create Team
route.post('/create', (req,res) => {
    const {teamName, creatorName, creatorID} = req.body;
    const newTeam = {
        id:shortUUID.generate(),
        data: {
            team: teamName,
            members:[
                [creatorName, creatorID, true],
            ]
        }
    }

    teamModel.create(newTeam)
    .then((team) => {
        res.status(201).send(team);
    })
    .catch((err) => {
        res.status(400).send('There was an error.')
    })
})

module.exports = route;