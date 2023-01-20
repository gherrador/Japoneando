const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    phone: {type: String, require: true},      
    username: { type: String, require: true},
    password: { type: String, require: true},
    photo: {type: String, require: true},
    email: {type: String},
    facebookId: { type: String },
    admin: { type: Boolean, default: false }
})

module.exports = model('user', schemaUser);

