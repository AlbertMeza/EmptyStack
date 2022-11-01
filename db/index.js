require("dotenv").config();

const mongoose = require("mongoose");

const conn = mongoose
  .connect("mongodb+srv://dbUser:q40j1EvpwBc1kKE2@cluster0.altigvb.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewURLParser: true,
    dbName: "EmptyStack"
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.error("Database not connected:", e));

const db = mongoose.connection;

module.exports = db;