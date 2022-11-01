require("dotenv").config();

const express = require('express');
const app = express(); // server software
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const db = require('./db/index');
const { StudentsSchema } = require('./models');
const { UserRoutes } = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get('/test', (req, res) => {
    res.json({
        success: true,
        name: "This is a placeholder message for testing purposes."
    })
});

app.use('/users', UserRoutes);

app.post('/test/db', async (req, res) => {
    const payload = req.body;

    if (!payload) {
        return res.status(400).json({
          success: false,
          error: "Must include payload",
        });
    }

    const student = new StudentsSchema(payload);

    if (!student) {
        return res.status(400).json({
          success: false,
          error: "Student not created",
        });
    }
    
    await student
    .save()
    .then(() => res.status(200).json({
        success: true
    }))
    .catch(e => console.log(e))
})

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));