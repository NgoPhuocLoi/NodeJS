var express = require('express')
var router = express.Router()

const formulaController = require('../app/controller/formulaController.js')

// router.get('/:slug', formulaController.send)
router.get('/edit', formulaController.edit)
router.delete('/:id/force', formulaController.deleteForce)
router.get('/create', formulaController.create)
router.post('/store', formulaController.store)
router.get('/', formulaController.index)


module.exports = router
