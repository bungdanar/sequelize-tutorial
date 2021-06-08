// Import dbContext
const { dbContext } = require('./database')

async function main() {
  try {
    // Tes koneksi sequelize ke database server
    await dbContext.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log(error)
  }
}

main()
