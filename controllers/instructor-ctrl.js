const { Instructor, User } = require("./../models");

// Create instructor
const createInstructor = (req, res) => {
  // capture payload
  const payload = req.body;

  if (!payload) {
    return res.status(400).json({
      success: false,
      error: "Request body must not be empty",
    });
  }

  const user = new User({
    email: payload.email,
    username: payload.username,
    password: payload.password,
    isInstructor: true,
  });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: "Failed to create instance of user",
    });
  }

  if (user.isInstructor) {
    user.save().then(() => {
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
    });
  }
};

// Read instructor data
const getInstructors = async (req, res) => {
  await Instructor.find({})
    .populate("info")
    .exec((e, instructors) => {
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

// Create a resource
const createResource = (req, res) => {
  // Receive a request
  const payload = req.body;
  // Validate payload
  if (!payload) {
    return res.status(400).json({
      success: false,
      error: "Request body must not be empty",
    });
  }
  // Instantiate a resource
  const resource = new Resource(payload);
  // Validate the instance
  if (!resource) {
    return res.status(400).json({
      success: false,
      error: "Failed to create instance of Resource",
    });
  }

  resource.save().then().catch();
};

const create = () => {};

// Create a week

module.exports = {
  createInstructor,
  getInstructors,
  getInstructor,
};
