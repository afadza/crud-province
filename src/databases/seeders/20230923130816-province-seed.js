'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('provinces', [
      {
        name: 'Jakarta Barat',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Jakarta Timur',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Jakarta Selatan',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('provinces', null, {});
  }
};
