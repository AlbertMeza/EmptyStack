const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const StudentSchema = new Schema({
  visionBoard: String,
  tasks: [{ task: String }],
});

module.exports = mongoose.model("Student", StudentSchema);
