const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  info: { type: Schema.Types.ObjectId, ref: "User" },
  message: String,
  links: [{ type: Schema.Types.ObjectId, ref: "Resource" }],
  weeks: [{ type: Schema.Types.ObjectId, ref: "Week" }],
});

const ResourceSchema = new Schema({
  link: String,
});

const WeekSchema = new Schema({
  topics: String,
});

module.exports = mongoose.model("Instructor", InstructorSchema);
module.exports = mongoose.model("Resource", ResourceSchema);
module.exports = mongoose.model("Week", WeekSchema);
