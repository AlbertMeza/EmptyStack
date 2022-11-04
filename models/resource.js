const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  link: String,
});

module.exports = mongoose.model("Resource", ResourceSchema);
