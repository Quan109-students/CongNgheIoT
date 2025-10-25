const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose')


const MONGODB_URL = 'mongodb+srv://buoi2:123@cluster0.jzdibrv.mongodb.net/?appName=Cluster0'

// Kết nối MongoDB (không dùng callback nữa)
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' Connected to MongoDB')
})
.catch((err) => {
  console.error(' MongoDB connection error:', err)
})


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRouter = require('./api/routes/location.route')
app.use('/v1/api/location', locationRouter)

app.listen(process.env.PORT)