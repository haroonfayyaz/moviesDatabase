"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class genres extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            genres.hasMany(models.movie_genres, {
                foreignKey: "gen_id",
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        }
    }
    genres.init({
        gen_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        gen_title: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "genres",
        underscored: true,
        freezeTableName: true

    });
    return genres;
};