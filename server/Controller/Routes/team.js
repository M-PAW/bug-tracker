const teamRouter = require('express').Router();
const teamModel = require('../../Model/teamModel');
const userModel = require('../../Model/userModel');
const shortUUID = require('short-uuid');

// Get Team
teamRouter.get('/', (req,res) => {

})

// Create Team
teamRouter.post('/create', (req,res) => {

})

// Update Team
teamRouter.put('/update', (req,res) => {

})

// Add Bug to Queue
teamRouter.put('/bug', (req,res) => {

})

module.exports = teamRouter;