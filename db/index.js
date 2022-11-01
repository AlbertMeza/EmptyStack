const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://dbUser:q40j1EvpwBc1kKE2@cluster0.altigvb.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewURLParser: true,
    }
  )
  .then(() => console.log("Database connected"))
  .catch((e) => console.error("Database not connected:", e));
