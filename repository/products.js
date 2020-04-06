const Sequelize = require('sequelize')
const productModel = require('../models/product')


const sequelize = new Sequelize('zIz2ssiZIP', 'zIz2ssiZIP', 'wh7rAK0aPf', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
const product = productModel(sequelize, Sequelize)



sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {
    product
}