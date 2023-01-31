require('dotenv').config()
require('./config/db')
const express = require('express')
//import bodyParser from 'body-parser'
//import cors from 'cors'

const router = require('./routes.js')

const app = express()

app.use(express.json())
express.urlencoded({ extended: false })
//app.use(cors())
app.use(router)

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server running on port: ${process.env.PORT}`)
)
