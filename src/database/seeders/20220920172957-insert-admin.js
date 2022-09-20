'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      email: 'admin@concesionaria.com',
      password: bcrypt.hashSync(process.env.ADMIN_PW,10),
      admin:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{});
  }
};
