'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Cars',
      'UserId',
      {
        type: Sequelize.DataTypes.INTEGER
      })
      queryInterface.addConstraint('Cars',{
        fields:['UserId'],
        type: 'foreign key',
        name: 'car_user_association',
        references:{
          table:'Users',
          field:'id'
        }})
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.removeConstraint('Cars', 'car_user_association');
  }
};
