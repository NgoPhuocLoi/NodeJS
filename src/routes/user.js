const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController')


router.get('/create', userController.create)
router.get('/trash', userController.trash)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/all', userController.deleteAll)
router.delete('/options/delete', userController.optionsDelete)
router.delete('/:id', userController.delete)
router.delete('/:id/force', userController.deleteForce)
router.patch('/:id/restore', userController.restore)
router.post('/store', userController.store)
router.get('/:id', userController.showDetails)
router.get('/', userController.index)

module.exports = router
