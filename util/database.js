const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete-2", "root", "T#9758@QLPH", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
