const { Student } = require('../models/studentModel');
const { sendOtp, validateOtp } = require('./otpService');

const createStudent = async (studentData) => {
  const { email } = studentData;
  const otp = await sendOtp(email);
  // Save OTP temporarily (e.g., in-memory or in a cache) for validation
  // You can use a database or cache for production
};

const verifyOtp = async (email, otp) => {
  return await validateOtp(email, otp);
};

const saveStudentData = async (email) => {
  // Find the student data and save to the database after OTP validation
  // Here, you would add your logic to save the data in your database
  const student = new Student({ email });
  await student.save();
};

module.exports = {
  createStudent,
  verifyOtp,
  saveStudentData,
};
