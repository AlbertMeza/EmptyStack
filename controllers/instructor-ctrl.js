const { Instructor } = require("./../models");

// Create instructor
const createInstructor = (req, res) => {
  // capture payload
  const payload = req.body;
  // validate payload
  if (!payload) {
    // if bad request send a status code and a json message
    return res.status(400).json({
      // success - false
      success: false,
      // error - pass a message
      error: "Request body must not be empty",
    });
  }
  // create a new instance
  const instructor = new Instructor(payload);
  // check if instance was created
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
};

// Read instructor data
const getInstructors = async (req, res) => {
  await Instructor.find({}, (e, instructors) => {
    if (e) {
      return res.status(400).json({
        e,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      data: instructors,
    });
  })
    .clone()
    .catch((e) => console.log(e));
};

const getInstructor = async (req, res) => {
  const data = await Instructor.findById(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
};

// Update instructor message
const updateInstructor = (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: "Missing id",
      success: false,
    });
  }
  Instructor.findByIdAndUpdate(req.params.id, req.body, (e) => {
    if (e) {
      return res.status(400).json({
        e,
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      id: req.params.id,
    });
  });
};

// Update instructor links
const updateInstructorLinks = (req, res) => {};

// Update instructor weeks
const updateInstructorWeeks = (req, res) => {};

// Delete instructor message
const deleteInstructorMessage = async (req, res) => {};

module.exports = {
  createInstructor,
  getInstructors,
  getInstructor,
  updateInstructor,
  updateInstructorLinks,
  updateInstructorWeeks,
  deleteInstructorMessage,
};
