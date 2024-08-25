const { Alumni } = require('../models/alumniModel');
const { sendOtp, validateOtp } = require('./otpService');

const createAlumni = async (alumniData) => {
  const { email } = alumniData;
  const otp = await sendOtp(email);
  // Save OTP temporarily (e.g., in-memory or in a cache) for validation
  // You can use a database or cache for production
};

const verifyOtp = async (email, otp) => {
  return await validateOtp(email, otp);
};

const saveAlumniData = async (email) => {
  // Find the alumni data and save to the database after OTP validation
  // Here, you would add your logic to save the data in your database
  const alumni = new Alumni({ email });
  await alumni.save();
};

module.exports = {
  createAlumni,
  verifyOtp,
  saveAlumniData,
};
