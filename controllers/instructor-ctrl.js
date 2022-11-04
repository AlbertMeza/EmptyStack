const { Instructor } = require("./../models");

// Read instructor data
const getInstructors = async (req, res) => {
  await Instructor.find({})
    .populate("info", "_id")
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
    });
};

const getInstructor = async (req, res) => {
  const data = await Instructor.findById(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
};

module.exports = {
  getInstructors,
  getInstructor,
};
