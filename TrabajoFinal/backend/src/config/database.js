import Sequelize from 'sequelize'

const hostname = 'pmorales-20203263-prograweb.postgres.database.azure.com'
const username = 'postgres'
const password = 'mor4800'
const database = 'registro'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 100,
        min:0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize;