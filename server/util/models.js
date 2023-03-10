const {DataTypes} = require('sequelize')
const db = require('./database')

module.exports = {
   User: db.define("user", {
      id: {
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
         type: DataTypes.INTEGER
      },
      username: {
         type: DataTypes.STRING({length: 20}),
         allowNull: false
      },
      password: {
         type: DataTypes.STRING({length: 50}),
         allowNull: false
      }
   }),
   Product: db.define("product", {
      id: {
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
         type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      clearance: DataTypes.BOOLEAN
   }),
   Cart: db.define("cart", {
      id: {
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
         type: DataTypes.INTEGER
      },
   })
}