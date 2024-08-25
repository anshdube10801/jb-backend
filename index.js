const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const sequelize = require('./config/database'); // Import the Sequelize instance
const signupRoute = require('./routes/signup'); // Import your routes

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Connect to PostgreSQL using Sequelize
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Test the database connection
    console.log('PostgreSQL connected');
    await sequelize.sync(); // Sync models with the database
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error; // Rethrow the error to stop the server from starting if the database connection fails
  }
};

connectDB();

// Use routes
app.use('/signup', signupRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
