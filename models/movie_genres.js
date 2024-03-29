"use strict";
const { Model } = require("sequelize");
const movie = require("./movie");
module.exports = (sequelize, DataTypes) => {
    class movie_genres extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            movie_genres.belongsTo(models.genres, { foreignKey: 'gen_id' });
            movie_genres.belongsTo(models.movie, { foreignKey: 'mov_id' });
        }
    }
    movie_genres.init({
        gen_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: "genres", key: "gen_id" },
        },
        mov_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: "movie", key: "mov_id" },
        },
    }, {
        sequelize,
        modelName: "movie_genres",
        underscored: true,
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    movie_genres.removeAttribute('id');
    return movie_genres;
};