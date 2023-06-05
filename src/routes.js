const express = require('express')
const router = express.Router()
const testController = require('./controller/testController')
const multer = require('multer')

router.post('/test', multer.none(), testController)
router.get('/', (req, res) => res.send('Hello World!'))

module.exports = router
