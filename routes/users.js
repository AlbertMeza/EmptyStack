const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login"); //authorization

const {
  loadRegistration,
  registerUser,
  logoutUser,
  getProfile,
  getUsers,
  attemptLogin,
} = require("../controllers/user-ctrl");

// login endpoint is handled by html form
router.post("/login", attemptLogin);

// go to register page
router.get("/register", loadRegistration);

// // submit registration
router.post("/register/attempt", registerUser);

// // logout
router.get("/logout", logoutUser);

// // get user profile
router.get("/profile", connectEnsureLogin.ensureLoggedIn(), getProfile);

// // get all users
router.get("/", getUsers);

module.exports = router;
