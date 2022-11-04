const express = require("express");
const router = express.Router();

const {
  getInstructors,
  getInstructor,
} = require("./../controllers/instructor-ctrl");

router.get("/instructors", getInstructors);
router.get("/instructor/:id", getInstructor);

module.exports = router;
