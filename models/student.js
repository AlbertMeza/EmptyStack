const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const StudentSchema = new Schema({
  visionBoard: [{ imageURL: String }],
  tasks: [{ task: String, isComplete: Boolean }],
});

module.exports = mongoose.model("Student", StudentSchema);
