const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('node-complete','root','123456',{
    dialect : 'mysql',
    host : 'localhost'
});

module.export = sequelize