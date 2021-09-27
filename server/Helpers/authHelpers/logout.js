const sessionModel = require('../../Model/sessionModel');

const logout = (authToken,res) => {
    sessionModel.findOneAndDelete(authToken, (err, found) => {
        if (err | !found) {
            return res.status(400).send('Error')
        }
        return res.status(200).send('Success')
    })
}

module.exports = logout;