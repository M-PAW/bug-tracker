const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    data:Object({
        name:String,
        teams:Object({
            past:Object([]),
            current:Object([]),
        }),
        bugs:Object([])
    })
})

const model = mongoose.model('User', schema)

module.exports = model;