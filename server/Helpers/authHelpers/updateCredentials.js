const loginModel = require('../../Model/loginModel');
const sessionModel = require('../../Model/sessionModel');

const updateCredentials = (authToken,oldPassword,newPassword,bcrypt,salt, res) => {

    sessionModel.findOne({_id:authToken}, (err, session) => {
        if (err | !session) {
            return res.status(400).send('Error')
        }
        if (session) {
            loginModel.findOne({_id:session.userId}, (err, foundUser) => {
                if (err | !foundUser) {
                    return res.status(400).send('Error')
                }
                const isValid = bcrypt.compareSync(oldPassword, foundUser.password);

                if (isValid) {
        
                    const password = bcrypt.hashSync(newPassword,salt)
                    const _id = foundUser._id;
                    loginModel.findByIdAndUpdate(_id,{password})
                    .then(updated => {
                        return res.status(201).send('Success')
                    })
                    .catch((err) => {
                        return res.status(400).send('Error')
                    })

                }
            })
        }
    })    

}

module.exports = updateCredentials;