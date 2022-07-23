const router = require('express').Router()
const droneController = require('../controllers/drones.controller')

router.get('/', droneController.list)
router.get('/new', droneController.create)
router.post('/', droneController.doCreate)

module.exports = router