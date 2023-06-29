const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});


const User  = sequelize.define('user',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
},
name: DataTypes.STRING,
email : DataTypes.STRING
})

module.exports = User;