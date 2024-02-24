var mongoose = require('mongoose')
var Schema = mongoose.Schema

var traineeSchema = new Schema({
    avatar:{
        type: String,
        default: 'Unknown'
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    age: {
        type: String,
        default: 'Unknown'
    },
    height: {
        type: String,
        default: 'Unknown'
    },
    weight: {
        type: String,
        default: 'Unknown'
    }
})

module.exports = mongoose.model('trainees', traineeSchema)