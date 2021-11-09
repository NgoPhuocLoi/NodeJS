var express = require('express')
var router = express.Router()

const formula3DController = require('../app/controller/formula3DController.js')

// router.get('/:slug', formula3DController.send)
// router.get('/edit', formula3DController.edit)
// router.delete('/:id/force', formula3DController.deleteForce)
// router.get('/create', formula3DController.create)
// router.post('/store', formula3DController.store)
router.get('/', formula3DController.index)


module.exports = router
