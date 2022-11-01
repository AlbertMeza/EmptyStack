const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const { registerUser } = require('../controllers/students-cntrl')

// login endpoint is handled by html form

// go to register page
// router.get('/register', loadRegistration);

// // submit registration
router.post('/register/attempt', registerUser);

// // logout
// router.get('/logout', logoutUser);

// // get user profile
// router.get('/profile', connectEnsureLogin.ensureLoggedIn(), getProfile);

// // get all users
// router.get('/users', getUsers);

module.exports = router;