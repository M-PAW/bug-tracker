const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');

const updateCredentials = (authToken,name,oldPassword,newPassword,bcrypt,salt, res) => {

    sessionModel.findOne({_id:authToken}, (err, session) => {
        if (err | !session) {
            return res.status(400).send('Error1')
        }
        if (session) {
            loginModel.findOne({_id:session.userId}, (err, user) => {
                if (err | !user) {
                    return res.status(400).send('Error2')
                }
                if (user) {
                    console.log(oldPassword);
                    console.log(user);
                    if (bcrypt.compareSync(user.password, oldPassword)){
                        const newHash = bcrypt.hashSync(newPassword,salt)
                        console.log(newHash);
                    }
                }
            })
        }
    })    

}

module.exports = updateCredentials;