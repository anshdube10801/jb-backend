const alumniService = require('../service/alumniService');

const createAlumni = async (req, res) => {
  try {
    const alumniData = req.body;
    await alumniService.createAlumni(alumniData);
    res.status(200).json({ message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyAlumniOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const isValidOtp = await alumniService.verifyOtp(email, otp);
    if (isValidOtp) {
      await alumniService.saveAlumniData(email);
      res.status(200).json({ message: 'Alumni registered successfully' });
    } else {
      res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAlumni,
  verifyAlumniOtp,
};
