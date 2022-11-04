require("dotenv").config();

const express = require('express');
const app = express(); // server software
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const bodyParser = require('body-parser')
const db = require('./db/index');
const { StudentsSchema } = require('./models');
const { AuthRoutes } = require("./routes");
const session = require('express-session');  // session middleware
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser')
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    genid: function (req) {
      return uuidv4();
    },
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { 
      maxAge: 60 * 60 * 1000,
      // httpOnly: false,
      sameSite: "none",
      secure: true
    }
}));

app.use(
  cors({
    origin: "http://localhost:3002/",
    credentials: true,
  })
);

app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.set("trust proxy", 1);

// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html')
})
app.get('/test', (req, res) => {
    res.json({
        success: true,
        name: "This is a placeholder message for testing purposes."
    })
});

app.use('/users', AuthRoutes);

// cookies
app.get('/setcookie', (req, res) => {
  res.cookie(`Cookie token name`,`encrypted cookie string Value`);
  res.send('Cookie have been saved successfully');
});

app.get('/getcookie', (req, res) => {
  //show the saved cookies
  console.log(req.cookies)
  res.send(req.cookies);
});

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