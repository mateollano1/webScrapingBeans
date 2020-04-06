module.exports = (sequelize, type) => {
    return sequelize.define('produt', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        type_weight: type.STRING,
        price: type.STRING,
    })
}