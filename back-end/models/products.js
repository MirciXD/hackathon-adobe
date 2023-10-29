const { DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('products', {
        productId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        initialPrice : {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        expirationDate : {
            type: DataTypes.DATE,
            allowNull: false
        },
        manufacturer : {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId : {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    })
}

