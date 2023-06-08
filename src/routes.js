const express = require('express')
const router = express.Router()
const testController = require('./controller/testController')
const whatsappController = require('./controller/whatsappController')
const multer = require('multer')
const upload = multer()

router.post('/test', upload.none(), testController)
router.post('/whatsapp', whatsappController)
router.get('/', (req, res) => res.send('Hello World!'))

module.exports = router
