'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate(models) {
    }
  }
  Song.init({
    title: DataTypes.STRING,
    bandId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete:'CASCADE',
      references:{
        model:'Bands',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};