const express = require("express");
const router = express.Router();

const { getStudents, getStudent } = require("./../controllers/student-ctrl");

router.get("/students", getStudents);
router.get("/student/:id", getStudent);

module.exports = router;
