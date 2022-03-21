const {Schema, model} = require('mongoose')

const User = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    cloudinary_id: {type: String},
    follows: {type: [String]},
    followers: {type: [String]}
})

module.exports = model('User', User)