const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  info: { type: Schema.Types.ObjectId, ref: "User" },
  visionBoard: [{ type: Schema.Types.ObjectId, ref: "Image" }],
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("Students", StudentSchema);
