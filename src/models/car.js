'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.User,{
        foreignKey: 'UserId',
        onDelete: 'NULL'    
      })
    }
  }
  Car.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};