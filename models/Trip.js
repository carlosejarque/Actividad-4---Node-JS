const {DataTypes} = require('sequelize');
const sequelize = require('./index');
const User = require('./User');

const Trip = sequelize.define('Trip', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  country: DataTypes.STRING,
  city: DataTypes.STRING,
  start_date: DataTypes.DATEONLY,
  end_date: DataTypes.DATEONLY,
  userId: DataTypes.INTEGER
});

User.hasMany(Trip, { foreignKey: 'userId' });
Trip.belongsTo(User, { foreignKey: 'userId' });

module.exports = Trip;
