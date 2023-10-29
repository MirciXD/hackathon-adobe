const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('partners', {
        partnerId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        type : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adress : {
            type: DataTypes.STRING,
            foreignKey: true
        }
    })
}

