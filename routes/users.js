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
} = require("../controllers/students-cntrl");

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

const {
  createInstructor,
  getInstructors,
  getInstructor,
  updateInstructorMessage,
} = require("./../controllers/instructor-ctrl");

router.post("/instructor/create", createInstructor);
router.get("/instructors", getInstructors);
router.get("/instructor/:id", getInstructor);
router.put("/instructor/:id/links/:id", updateInstructorMessage);

module.exports = router;
