// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});


const Product = sequelize.define('product',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : true,
    primaryKey: true
  },
  title : DataTypes.STRING,
  price : {
    type: DataTypes.DOUBLE,
    allownull:false
  },
  imageUrl:{
    type:DataTypes.STRING,
    allownull:false
  },
  description:DataTypes.STRING

});

module.exports = sequelize;
module.exports = Product;