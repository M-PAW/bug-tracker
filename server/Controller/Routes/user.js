const userRouter = require('express').Router();

// userRouter-Helpers
const getUser = require('../../Helpers/userHelpers/getUser');
const updateProfile = require('../../Helpers/userHelpers/updateProfile');

// Get User
userRouter.get('/', (req,res) => {
    console.log("/user/ hit");
    const {_id} = req.body;
    getUser(_id, res);
})

// Update User Profile
userRouter.put('/profile', (req,res) => {
    const {_id, data} = req.body;
    updateProfile(_id,data,res);
})

module.exports = userRouter;