// This file to be deleted
const express = require("express");
const router = express.Router();

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
