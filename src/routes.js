const express = require('express')
const router = express.Router()
const testController = require('./controller/testController')

router.post('/test', testController)
router.get('/', (req, res) => res.send('Hello World!'))

module.exports = router
