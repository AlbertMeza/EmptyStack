const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
  topics: String,
});

module.exports = mongoose.model("Week", WeekSchema);
