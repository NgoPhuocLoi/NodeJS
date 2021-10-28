var express = require('express')
var router = express.Router()

const newsController = require('../app/controller/newsController.js')

router.get('/:slug', newsController.send)
router.get('/', newsController.index)


module.exports = router
