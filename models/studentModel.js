const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to your config

const CurrentStudent = sequelize.define('CurrentStudent', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  collegeEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enrollmentYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  expectedGraduationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'current_students', // Custom table name
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = CurrentStudent;
