const router = require('express').Router()
const droneController = require('../controllers/drones.controller')

router.get('/', droneController.list)
router.get('/new', droneController.create)

router.post('/new-drone', droneController.doCreate)

router.get('/edit-drone/:id', droneController.edit)
router.post('/edit-drone', droneController.doEdit)

module.exports = router