const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  imageURL: String,
});

module.exports = mongoose.model("Image", ImageSchema);
