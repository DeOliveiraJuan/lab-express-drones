const mongoose = require('mongoose')
const DRONE = require('../data/drone.json')
const Drone = require('../models/Drone.model')

require('../config/db.config')

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
    .then(()=> {
        console.log('Db dropped')

        return Drone.create(DRONE)
    })
    .then(createdDrones => {
        console.log('Creating drones')
        createdDrones.forEach(drone => console.log(`${drone.name} was created!`))

        return mongoose.connection.close()
    })
    .then(() => {
        console.log('Connection closed')
        process.exit(1)
    })
    .catch(err => {
        console.log(err)
        process.exit(0)
    })
})