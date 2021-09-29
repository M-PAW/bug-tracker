const userRouter = require('express').Router();

// userRouter-Helpers
const getUser = require('../../Helpers/userHelpers/getUser');
const updateProfile = require('../../Helpers/userHelpers/updateProfile');

// Get User
userRouter.get('/', (req,res) => {
    console.log("/user/ Hit");
    const {_id} = req.body;
    getUser(_id, res);
})

// Get Profile
userRouter.get('/profile', (req,res) => {
    const {_id} = req.body;
    console.log("/user/profile Hit");
})

// Update User Profile
userRouter.put('/update', (req,res) => {
    console.log('user/update Hit');
    const {_id, data} = req.body;
    updateProfile(_id,data,res);
})

module.exports = userRouter;