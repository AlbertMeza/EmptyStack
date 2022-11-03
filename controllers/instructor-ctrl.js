const { Instructor, User } = require("./../models");

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
  getInstructors,
  getInstructor,
};
