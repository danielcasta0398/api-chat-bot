const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

//Users
const User = db.define("user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone:{
    type: DataTypes.BIGINT,
    allowNull: false
  },

  address:{
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  urlQr:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'standar',
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { User };
