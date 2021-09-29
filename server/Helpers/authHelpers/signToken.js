const jwt = require('jsonwebtoken');

const signToken = (email) => {
    return jwt.sign({email}, process.env.JWT_SECRET)
}

module.exports = signToken;