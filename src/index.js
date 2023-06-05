require('dotenv').config()
require('./config/db')
const express = require('express')
//import bodyParser from 'body-parser'
const cors = require('cors')

const router = require('./routes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server running on port: ${process.env.PORT}`)
)
