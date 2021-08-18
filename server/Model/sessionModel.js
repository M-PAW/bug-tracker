const mongoose = require('mongoose');

const schema = mongoose.Schema({
    String:String
})

const model = mongoose.model('Session',schema)

module.exports = model;