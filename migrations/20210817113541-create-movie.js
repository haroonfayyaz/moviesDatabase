"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movie", {
      mov_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mov_title: {
        type: Sequelize.STRING,
      },
      mov_year: {
        type: Sequelize.INTEGER,
      },
      mov_time: {
        type: Sequelize.INTEGER,
      },
      mov_lang: {
        type: Sequelize.STRING,
      },
      mov_dt_rel: {
        type: Sequelize.DATEONLY,
      },
      mov_rel_country: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex("movie", ["mov_title"], {
      name: "movie_movie_title",
      using: "BTREE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex("movie", ["mov_title"]);
    await queryInterface.dropTable("movie");
  },
};
