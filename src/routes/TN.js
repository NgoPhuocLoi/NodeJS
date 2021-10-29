var express = require('express')
var router = express.Router()

const TNController = require('../app/controller/TNController.js')

// router.get('/:slug', TNController.send)
router.get('/edit', TNController.edit)
router.delete('/:id/force', TNController.deleteForce)
router.get('/create', TNController.create)
router.post('/store', TNController.store)
router.get('/', TNController.index)


module.exports = router
