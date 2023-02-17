'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Bands',[{
      name:'Dystopia',
      groupSize:4,
      active:false,
      createdAt:date,
      updatedAt:date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bands',null,{})
  }
};
