'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('thoughts',
    
    {
       id:
       {
          type : Sequelize.INTEGER,
          allowNull : false,
          primaryKey  : true, 
          autoIncrement : true,
       },
       title:
       {
          type : Sequelize.STRING,
          allowNull : false
       },
       descricao : {
        type : Sequelize.STRING,
        allowNull : false
       },

      create_at :{
        type : Sequelize.DATE,
        allowNull  : false
      },
      updated_at :
      {
        type : Sequelize.DATE,
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('thoughts');
  }
};
