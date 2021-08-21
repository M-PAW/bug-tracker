const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    data:Object({
        team:String,
        members:Object([]),
        queue:Object([])
    })
})

const model = mongoose.model('Team', schema)

module.exports = model;