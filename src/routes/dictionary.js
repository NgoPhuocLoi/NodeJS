var express = require('express')
var router = express.Router()

const dictionaryController = require('../app/controller/dictionaryController.js')

// router.get('/:slug', chemicalEqtController.send)
router.get('/edit', dictionaryController.edit)
router.delete('/:id/force', dictionaryController.deleteForce)
// router.get('/:id/change', chemicalEqtController.change)
// router.put('/:id', chemicalEqtController.update)
router.post('/store', dictionaryController.store)
router.get('/search', dictionaryController.search)
router.get('/', dictionaryController.index)


module.exports = router
