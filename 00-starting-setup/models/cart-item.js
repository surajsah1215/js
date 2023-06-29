// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');
const sequelize = new Sequelize('node-complete','root','123456',{
    dialect : 'mysql',
    host : 'localhost'
  });


const CartItem = sequelize.define('cartItem',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : false,
    primaryKey: true
  },
  quantitiy : DataTypes.INTEGER

});

module.exports = CartItem;
