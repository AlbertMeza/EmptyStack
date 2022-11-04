require("dotenv").config();

const mongoose = require("mongoose");

const conn = mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewURLParser: true,
    dbName: "EmptyStack",
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.error("Database not connected:", e));

const db = mongoose.connection;

module.exports = db;
