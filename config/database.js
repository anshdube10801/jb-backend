const { Sequelize } = require('sequelize');

// Initialize Sequelize with PostgreSQL database credentials
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host:'localhost',
  dialect: 'postgres',
  logging: false,
  retry: {
    match: [/Deadlock/i, Sequelize.ConnectionError],
    max: 100,
    backoffBase: 3000,
    backoffExponent: 1.5,
  },
});

module.exports = sequelize;
