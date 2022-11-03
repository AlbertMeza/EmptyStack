/* This controller is strictly used for authentication (creating accounts, logging in, logging out) */
const { User, Instructor, Student } = require("../models");
const passport = require("passport"); // authentication
const jwt = require("jsonwebtoken");
const secretkey = "secretkeyappearshere";

// This function called when users login
const attemptLogin = (req, res, next) => {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          const token = jwt.sign(
            { userId: user._id, username: user.username },
            secretkey,
            { expiresIn: "24h" }
          );
          res.json({
            success: true,
            message: "Authentication successful",
            token: token,
          });
        }
      }
    })(req, res);
  }
};

// This function is called when a new account is created
const registerUser = async (req, res) => {
  const payload = req.body;

  if (!payload) {
    return res.status(400).json({
      success: false,
      error: "Must include user information.",
    });
  }

  const user = new User({
    email: payload.email,
    username: payload.username,
    password: payload.password,
    isInstructor: payload.isInstructor,
  });

  User.register(user, user.password, (error) => {
    if (error) {
      return res.redirect("/");
    }
    if (user.isInstructor) {
      const instructor = new Instructor({
        info: user._id,
      });
      if (!instructor) {
        return res.status(400).json({
          success: false,
          error: "Failed to create instance of instructor",
        });
      }
      instructor
        .save()
        .then(() => {
          return res.status(201).json({
            success: true,
            id: instructor._id,
            message: "Instructor created",
          });
        })
        .catch((e) => {
          return res.status(400).json({
            e,
            message: "Instructor not created",
          });
        });
    } else {
      const student = new Student({
        info: user._id,
      });
      if (!student) {
        return res.status(400).json({
          success: false,
          error: "Failed to create instance of student",
        });
      }
      student
        .save()
        .then(() => {
          return res.status(201).json({
            success: true,
            id: student._id,
            message: "Student created",
          });
        })
        .catch((e) => {
          return res.status(400).json({
            e,
            message: "Student not created",
          });
        });
    }
    passport.authenticate("local")(req, res, () => {
      return res.status(200).json({
        success: true,
        message: "Authenticated",
      });
    });
  });

  // user
  //   .then(() => {
  //     passport.authenticate("local")(req, res, () => {
  //       return res.status(200).json({
  //         success: true,
  //         message: "User created",
  //       });
  //     });
  //   })
  //   .catch((e) => {
  //     return res.status(400).json({
  //       e,
  //       message: "User not created",
  //     });
  //   });
};

// This function is called when users logout
const logoutUser = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
};

/* This function would be for admins
const getUsers = async (req, res) => {
  await User.find({}, (error, destination) => {
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
};
*/

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(User.createStrategy());

module.exports = {
  attemptLogin,
  registerUser,
  logoutUser,
};
