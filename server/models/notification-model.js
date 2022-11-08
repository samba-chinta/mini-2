const mongoose = require('mongoose')

const {Schema, model} = mongoose

const notificationSchema = new Schema({
  email: String,
  notifications: [String]
}, {collection: 'app_user_notifications'})

const NotificationModel = model('Notifications', notificationSchema)

module.exports = NotificationModel