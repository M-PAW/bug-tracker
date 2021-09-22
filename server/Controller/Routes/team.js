const route = require('express').Router();
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');
const shortUUID = require('short-uuid');

// Get Team
route.get('/', (req,res) => {
    const teamID = req.body.teamID;
    teamModel.findOne(teamID)
    .then((team) => {
        res.status(200).send(team)
    })
})

// Create Team
route.post('/create', (req,res) => {
    const {teamName, creatorName, creatorID} = req.body;
    const newTeam = {
        data: {
            team: teamName,
            members:[
                [creatorName, creatorID, true],
            ]
        }
    }

    teamModel.create(newTeam)
    .then((team) => {
        const _id = creatorID;
        userModel.findById(_id)
        .then((user) => {

            const data = user.data;
            data.teams.current.push(team)
            userModel.findOneAndUpdate(creatorID,{data})
            .then((updated) => {
                res.status(201).send(updated)
            })
            .catch(err => res.status(400).send('Error 3'))
        })
        .catch(err => res.status(400).send('Error 2'))

    })
    .catch((err) => {
        res.status(400).send('Error 1')
    })
})

module.exports = route;