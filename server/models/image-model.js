const mongoose = require('mongoose')

const {Schema, model} = mongoose

const imageSchema = new Schema({
  email: String,
  name: String,
  likes: {
    type: Number,
    default: 0
  },
  img: {
    data: Buffer, 
    contentType: String,
  }, 
  peopleInImage: [String]
}, {collection: 'app_posts'})

const ImageModel = model('Image', imageSchema)

module.exports = ImageModel