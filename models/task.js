const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: String,
  isComplete: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
