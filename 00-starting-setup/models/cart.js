// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});

const Cart = sequelize.define('cart',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : false,
    primaryKey: true
  }

});

module.exports = Cart;
