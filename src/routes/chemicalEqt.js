var express = require('express')
var router = express.Router()

const chemicalEqtController = require('../app/controller/chemicalEqtController.js')

// router.get('/:slug', chemicalEqtController.send)
router.get('/edit', chemicalEqtController.edit)
router.delete('/:id/force', chemicalEqtController.deleteForce)
// router.get('/create', chemicalEqtController.create)
router.post('/store', chemicalEqtController.store)
router.get('/search', chemicalEqtController.search)
router.get('/', chemicalEqtController.index)


module.exports = router
