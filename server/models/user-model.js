const mongoose = require('mongoose')

const {Schema, Model} = mongoose

const specifics = {
  type: String,
  require: true,
}

const userSchema = new Schema({
  username: specifics,
  password: specifics,
  email: specifics,
  phone: Number,
  gender: String,
  date_of_birth: Date, 
})

const User = Model('User', userSchema)

module.exports = User