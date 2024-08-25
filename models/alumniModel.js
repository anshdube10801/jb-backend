const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to your config

const Alumni = sequelize.define('Alumni', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  personalEmail: {
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
  graduationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  linkedinProfile: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  document: {
    type: DataTypes.STRING, // This will store the file path or name
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'alumni', // Custom table name
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Alumni;
