const { StudentsSchema } = require('../models');
const passport = require('passport');  // authentication
const jwt = require("jsonwebtoken");
const secretkey = "secretkeyappearshere"
const path = require('path');

const attemptLogin = (req, res, next) => {
    if (!req.body.username) {
        res.json({ success: false, message: "Username was not given" })
    }
    else if (!req.body.password) {
        res.json({ success: false, message: "Password was not given" })
    }
    else {
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                console.log(err);
                //res.json({ success: false, message: err });
                //location.reload();
                res.redirect('http://localhost:3002/login');
            }
            else {
                if (!user) {
                    //res.json({ success: false, message: "username or password incorrect" });
                    //location.reload();
                    res.redirect('http://localhost:3002/login');
                }
                else {
                    const token = jwt.sign({ userId: user._id, username: user.username }, secretkey, { expiresIn: "24h" });
                    //res.json({ success: true, message: "Authentication successful", token: token });
                    res.redirect('back')
                }
            }
        })(req, res); // this needs to be here or the app breaks upon form submission
    }
}


const loadRegistration = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'))
};

const registerUser = async (req, res) => {
    const payload = req.body;

    if (!payload) {
        return res.status(400).json({
            success: false,
            error: "Must include user information.",
        });
    };

    const authentication = StudentsSchema.register({username: payload.username, email: payload.email}, payload.password);

    if (!authentication) {
        return res.status(400).json({
            success: false,
            error: "User not created",
        });
    };

    await authentication
        .then(() => {
            passport.authenticate("local")(req, res, () => {
                return res.redirect('/');
                // return res.status(200).json({
                //     success: true,
                //     message: "User created"
                //   });
            })
            })
        .catch((e) => {
            // return res.status(400).json({
            //     e,
            //     message: "User not created"
            // })
            return res.redirect('back');
        })
}

const logoutUser = (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/');
    });
};

const getProfile = (req, res) => {
    res.render('../public/profile.ejs');
}

const deleteProfile = (req, res) => {

}

const getUsers = async (req, res) => {
    await StudentsSchema.find({}, (error, destination) => {
        if (error) {
          return res.status(400).json({
            error,
            success: false,
          });
        }
    
        return res.status(200).json({
          success: true,
          data: destination,
        });
      })
        .clone()
        .catch((err) => console.log(err));
}

// To use with sessions
passport.serializeUser(StudentsSchema.serializeUser());
passport.deserializeUser(StudentsSchema.deserializeUser());
passport.use(StudentsSchema.createStrategy());

module.exports = {
    attemptLogin,
    loadRegistration,
    registerUser,
    logoutUser,
    getUsers,
    getProfile,
    deleteProfile
}