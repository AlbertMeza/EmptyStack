const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const InstructorSchema = new Schema({
  username: String,
  message: String,
  links: [{ url: String }],
  week: String,
});

module.exports = mongoose.model("Instructor", InstructorSchema);
