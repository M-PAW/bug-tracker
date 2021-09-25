const loginModel = require('../../Model/loginModel');

const login = (name,password,bcrypt,res) => {
    loginModel.findOne({name})
    .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
            return res.status(200).send('Success')
        } 
        else {
            return res.status(400).send('Error')    
        }
    })
    .catch((err) => {
        return res.status(400).send('Error')
    })
}

module.exports = login;