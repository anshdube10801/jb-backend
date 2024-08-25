const express = require('express');
const { createStudent, verifyStudentOtp } = require('../controllers/studentController');
const { createAlumni, verifyAlumniOtp } = require('../controllers/alumniConroller');

const router = express.Router();

router.post('/students', createStudent);
router.post('/alumni', createAlumni);

router.post('/verify-student-otp', verifyStudentOtp);
router.post('/verify-alumni-otp', verifyAlumniOtp);

module.exports = router;
