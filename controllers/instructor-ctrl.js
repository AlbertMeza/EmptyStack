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

  instructor.save().then(() => {
    return res.status(201).json({
      success: true,
      id: instructor._id,
      message: "Instructor created",
    });
  });
};

// Read instructor data

// Update instructor data

// Delete instructor data

module.exports = {
  createInstructor,
};
