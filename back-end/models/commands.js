const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/db");

module.exports = (Sequelize, DataTypes) => {
    return sequelize.define('commands', {
        commmandId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price : {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        userId : {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    })
}

