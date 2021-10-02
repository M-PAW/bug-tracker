const loginModel = require('../../Model/loginModel');
const userModel = require('../../Model/userModel');

const createUser = (loginObject,res) => {

    loginModel.create(loginObject)
    .then(login => {
        const userObject = {
            _id: login._id,
            role: 1,
            data: {
                username: '',
                teams: {
                    current:'',
                    past:[],
                },
                bugs: {
                    current:'',
                    past:[]
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
            return res.status(400).send('Error')
        })

    })
    .catch((err) => {
        return res.status(400).send('Error')
    })

}

module.exports = createUser;