const mongoose = require('mongoose')

const {Schema, model} = mongoose

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
  dob: Date, 
}, {collection: 'app_users'})

const User = model('User', userSchema)

module.exports = User