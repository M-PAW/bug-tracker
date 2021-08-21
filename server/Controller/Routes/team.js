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
        const _id = creatorID;
        userModel.findById(_id)
        .then((userData) => {
            console.log(userData);
            const data = userData.data;
            data.teams.current.push(newTeam)

            userModel.findByIdAndUpdate(_id,{data})
            .then((user) => {
                res.status(201).send('Team-User Success')
            })
            .catch((err) => {
                return res.status(400).send('Team-User Update Failed')
            })


        })
        .catch((err) => {
            return res.status(400).send('There was an error.2')
        })



    })
    .catch((err) => {
        res.status(400).send('There was an error.1')
    })
})

module.exports = route;