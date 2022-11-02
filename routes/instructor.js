const express = require("express");
const router = express.Router();

const {
  createInstructor,
  getInstructors,
  getInstructor,
  updateInstructor,
} = require("./../controllers/instructor-ctrl");

router.post("/instructor/create", createInstructor);
router.get("/instructors", getInstructors);
router.get("/instructor/:id", getInstructor);
router.put("/instructor/update/:id", updateInstructor);

module.exports = router;
