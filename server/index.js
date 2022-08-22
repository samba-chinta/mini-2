const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const signup = require('./routes/signup')
const signin = require('./routes/signin')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection;

connection.once('connected', () => {
  console.log("Connected to Database")
})

connection.on('error', (err) => {
  console.log(`Error: ${err}`)
})

app.get('/', (req, res, next) => {
  res.send("<h2>Hey! Server Started</h2>")
})

app.use('/signup', signup)
app.use('/signin', signin)

app.listen(5000, () => {
  console.log("Listening at 5000")
})