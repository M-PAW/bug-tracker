const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id:String,
    userId:String,
    created:Date
})

const model = mongoose.model('Session',schema)

module.exports = model;