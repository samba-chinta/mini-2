const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  res.send("<h2>Hey! Server Started</h2>")
})

app.listen(5000, () => {
  console.log("Listening at 5000")
})