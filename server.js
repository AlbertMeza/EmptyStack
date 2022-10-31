const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");
const {
  /* TODO add */
} = require("./routes");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.collection(/*TODO add collection name*/)
    .find()
    .toArray()
    .then((results) => res.render(/* TODO */))
    .catch((e) => console.error("We have an error: ", e));
});

app.use("/api" /* TODO Add Api */);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
