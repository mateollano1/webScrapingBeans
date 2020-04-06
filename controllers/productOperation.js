const { User, Blog, Tag } = require('./sequelize')

app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})