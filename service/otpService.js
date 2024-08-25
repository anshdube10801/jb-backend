const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');

// Temporary storage for OTPs, use a database or cache for production
const otps = {};

const sendOtp = async (email) => {
  const otp = speakeasy.totp({
    secret: process.env.OTP_SECRET,
    encoding: 'base32',
  });

  // Store OTP in temporary storage
  otps[email] = otp;

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);

  return otp;
};

const validateOtp = (email, otp) => {
  const validOtp = otps[email];
  if (validOtp === otp) {
    delete otps[email]; // Clear OTP after validation
    return true;
  }
  return false;
};

module.exports = {
  sendOtp,
  validateOtp,
};
