const studentService = require('../service/studentService');

const createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    await studentService.createStudent(studentData);
    res.status(200).json({ message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyStudentOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const isValidOtp = await studentService.verifyOtp(email, otp);
    if (isValidOtp) {
      await studentService.saveStudentData(email);
      res.status(200).json({ message: 'Student registered successfully' });
    } else {
      res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  verifyStudentOtp,
};
