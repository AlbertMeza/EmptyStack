require("dotenv").config();

const express = require('express');
const app = express(); // server software
const PORT = process.env.PORT;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.get('/test', (req, res) => {
    res.json({
        success: true,
        name: "This is a placeholder message for testing purposes."
    })
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));