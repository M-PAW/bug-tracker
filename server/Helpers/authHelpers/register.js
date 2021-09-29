const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');

// Secondary Helpers
const createUser = require('./createUser');

const register = (email,hash,res) => {
    const loginObject = {
        email:email,
        password:hash,
    }
    loginModel.findOne({email})
    .then(found => {
        if (!found) {
            createUser(loginObject,res)
        }
        else {
            return res.status(400).send('Error')
        }
    })
    .catch((err) => {
        return res.status(400).send('Error');
    })
}

module.exports = register;