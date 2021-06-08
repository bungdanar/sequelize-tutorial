const { Sequelize } = require('sequelize')

const dbContext = new Sequelize({
  dialect: 'mssql',
  host: 'localhost',
  port: 1433,
  database: 'BookStore',
  username: 'yourDbUsername',
  password: 'yourDbPassword',
})

module.exports = {
  dbContext,
}
