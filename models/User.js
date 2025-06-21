const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = User;
