const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const StudentsSchema = new Schema({ 
    email: { type: String },
    username: { type: String },
    password: { type: String }, 
    visionBoard: [{ imageURL: String }],
    tasks: [{ task: String, isComplete: Boolean }]
});

StudentsSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Students", StudentsSchema);