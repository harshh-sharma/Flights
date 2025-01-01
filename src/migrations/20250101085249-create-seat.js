'use strict';

const { DataTypes } = require('sequelize');
const {seatTypes} = require('../utils/common/enums');
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS} = seatTypes;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'Airplanes',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      row: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      col: {
        type:DataTypes.STRING,
        allowNull:false
      },
      type: {
        type:DataTypes.ENUM,
        values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
        allowNull:false,
        defaultValue:ECONOMY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};