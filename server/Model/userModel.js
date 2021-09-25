const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    role:Number,
    data:Object({
        name:String,
        teams:Object({
            current:String,
            past:Object([]),
        }),
        bugs:Object({
            current:String,
            past:Object([])
        })
    })
})

const model = mongoose.model('User', schema)

module.exports = model;