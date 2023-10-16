'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
    { id: {
      type : Sequelize.INTEGER,
      primaryKey  : true,
      allowNull : false,
      autoIncrement : true,
      
    },
    email : {
      type : Sequelize.STRING,
      allowNull : false,
      unique : true,

    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmsenha : {
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
      
    
    }
    
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
