const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');

const register = (name,hash,res) => {
    const loginObject = {
        name:name,
        password: hash,
    }
    loginModel.findOne({name})
    .then(found => {
        if (found) {
            return res.status(400).send('Error');
        };
        loginModel.create(loginObject)
        .then(login => {
            const userObject = {
                _id: login._id,
                data: {
                    name:name,
                    teams: {
                        current: '',
                        past: []
                    },
                    bugs: {
                        current: '',
                        past: []
                    }
                }
            }
            userModel.create(userObject)
            .then(user => {
                if (user) {
                    return res.status(201).send('Success')
                }
            })
            .catch((err) => {
                return res.status(400).send('Error');
            })
        })
        .catch((err) => {
            return res.status(400).send('Error');
        })
    })
    .catch((err) => {
        return res.status(400).send('Error');
    })
}

module.exports = register;