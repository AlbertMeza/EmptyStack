const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  info: { type: Schema.Types.ObjectId, ref: "User" },
  message: String,
  links: [{ type: Schema.Types.ObjectId, ref: "Resource" }],
  weeks: [{ type: Schema.Types.ObjectId, ref: "Week" }],
});

module.exports = mongoose.model("Instructor", InstructorSchema);
