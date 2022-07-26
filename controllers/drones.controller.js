//CRUD

const createError = require('http-errors') //Controla los errores de http

const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
    Drone.find()
    .then(drones => {
        res.render('drones', { drones })
    })
}

module.exports.create = (req, res, next) => {
    res.render('create')
}

module.exports.doCreate = (req, res, next) => {
    console.log(req.body);
    const newDrone = new Drone(req.body);
    newDrone.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
}

