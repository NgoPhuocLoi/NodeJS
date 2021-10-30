var express = require('express')
var router = express.Router()

const flashcardController = require('../app/controller/flashcardController.js')

// router.get('/:slug', flashcardController.send)
router.get('/edit', flashcardController.edit)
router.delete('/:id/force', flashcardController.deleteForce)
// router.get('/create', flashcardController.create)
router.post('/store', flashcardController.store)
router.get('/', flashcardController.index)


module.exports = router
