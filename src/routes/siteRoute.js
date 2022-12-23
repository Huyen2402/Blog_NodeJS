
var express = require('express')
var app = express()
const siteController = require('../controllers/siteController')
const router = express.Router()

router.use('/', siteController.index) // mount the sub app

module.exports = router;