const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const InstructorSchema = new Schema({
  email: String,
  username: String,
  password: String,
  message: String,
  links: [String],
  weeks: [String],
});

InstructorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Instructor", InstructorSchema);
