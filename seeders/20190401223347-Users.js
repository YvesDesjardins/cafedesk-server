'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'User1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'User2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'User3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'User4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'User5',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'User6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
