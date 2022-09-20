'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users',
      'admin',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
      )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users','admin');
  }
};
