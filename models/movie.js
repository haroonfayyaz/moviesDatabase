"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movie.hasMany(models.movie_cast, {
        foreignKey: "mov_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      movie.hasMany(models.movie_genres, {
        foreignKey: "mov_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      movie.hasMany(models.movie_direction, {
        foreignKey: "mov_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  movie.init(
    {
      movie_title: DataTypes.STRING,
      mov_year: DataTypes.INTEGER,
      mov_time: DataTypes.INTEGER,
      mov_lang: DataTypes.STRING,
      mov_dt_rel: DataTypes.DATEONLY,
      mov_rel_country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movie",
      freezeTableName: true,
    }
  );
  return movie;
};
