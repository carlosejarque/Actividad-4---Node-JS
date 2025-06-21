const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "trips",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

module.exports = sequelize;