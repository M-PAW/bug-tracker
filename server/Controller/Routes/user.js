const userRouter = require('express').Router();

// userRouter-Helpers
const getUser = require('../../Helpers/userHelpers/getUser');
const updateProfile = require('../../Helpers/userHelpers/updateProfile');
// const deleteUser = require('../../Helpers/userHelpers/deleteUser');

// Get User
userRouter.get('/', (req,res) => {
    console.log("/user/ Hit");
    const {userId} = req.body;
    if (!userId) {
        res.status(400).send('Error');
    }
    else {
        getUser(userId, res);
    }
})

// Update User Profile
userRouter.put('/update', (req,res) => {
    const {authToken,userId, data} = req.body;
    if (!authToken | !userId | !data) {
        res.status(400).send('Error');
    }
    else {
        updateProfile(authToken,userId,data,res);
    }
})

// Delete User
// userRouter.post('/delete', (req,res) => {
//     const {authToken, userId, password} = req.body;
//     deleteUser(authToken,userId,password,res)
// })

module.exports = userRouter;