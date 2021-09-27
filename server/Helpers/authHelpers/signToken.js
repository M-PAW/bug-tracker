const jwt = require('jsonwebtoken');

const signToken = (name) => {
    return jwt.sign({name}, process.env.JWT_SECRET)
}

module.exports = signToken;