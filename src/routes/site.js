var express = require('express')
var router = express.Router()

const siteController = require('../app/controller/siteController')

router.get('/search', siteController.search)
router.post('/search', siteController.result)
router.get('/', siteController.index)

module.exports = router