'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, {
        foreignKey: 'artist_band_id',
        onDelete: 'cascade'
      })
    }
  }
  Album.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'albums'
  });
  return Album;
};