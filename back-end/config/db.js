const Sequelize = require("sequelize");

const database = new Sequelize(
 'adobe_hack_db',
 'root',
 '',
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
    }    
  }
);

module.exports = database;