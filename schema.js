const mongoose = require('mongoose')
const { Schema } = mongoose
const schemaDef = new Schema({
    username: { type: String, required: "User name cant be empty." },
    email: { type: String, required: "Email cant be empty." }
});
const schemadef = mongoose.model('user', schemaDef)
module.exports = schemadef