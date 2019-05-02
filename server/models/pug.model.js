const Sequelize = require('sequelize');
const db = require('./database');
const Coffee = require('./coffee.model');
const Op = Sequelize.Op;

const Pug = db.define('pugs', {
  // your code here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  biography: {
    type: Sequelize.TEXT
  }
});

module.exports = Pug;
