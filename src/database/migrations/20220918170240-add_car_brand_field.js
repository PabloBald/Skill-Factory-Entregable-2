'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Cars',
      'brand',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
      )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Cars','brand');
  }
};
