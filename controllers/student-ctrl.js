const { Student } = require("./../models");

// Read instructor data
const getStudents = async (req, res) => {
  await Student.find({})
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

const getStudent = async (req, res) => {
  const data = await Student.findById(req.params.id);
  return res.status(200).json({
    success: true,
    data,
  });
};

module.exports = {
  getStudents,
  getStudent,
};
