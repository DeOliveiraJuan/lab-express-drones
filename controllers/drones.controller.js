//CRUD

const createErrors = require('http-errors') //Controla los errores de http

const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
    Drone.find()
    .then(drones => {
        res.render('home', { drones })
    })
}

module.exports.create = (req, res, next) => {
    res.render('forms')
}

module.exports.docreate = (req, res, next) => {
    res.redirect('/')
}

