const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Add the name of the drone"]
    },
    propellers: {
        type: Number,
        required: [true, "Add the number of propellers"]
    },
    maxSpeed: {
        type: Number,
        required: [true, "Add the max speed"]
    }
})

const Drone = mongoose.model('Drone', droneSchema)

module.exports = Drone