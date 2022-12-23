
var express = require('express')
var app = express()
const newController = require('../controllers/newController')
const router = express.Router()

router.use('/', newController.index) // mount the sub app

module.exports = router;
