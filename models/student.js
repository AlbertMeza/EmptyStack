const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({
  info: { type: Schema.Types.ObjectId, ref: "User" },
  visionBoard: [{ imageURL: String }],
  tasks: [{ task: String, isComplete: Boolean }],
});

module.exports = mongoose.model("Students", Student);