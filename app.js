require('dotenv/config')

const express = require('express')
const hbs = require('hbs')
const logger = require('morgan')

require('./config/db.config')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

const routes = require('./config/routes.config')
app.use(routes)

app.use((err, req, res, next ) => {
    res.send(err)
})

app.listen(3000, () => console.log('Running on port 3000'))