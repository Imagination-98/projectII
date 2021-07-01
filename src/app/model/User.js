const mongoose = require('mongoose')

const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  user_id: String,
  phone: Number,
  email: String,
  address: String,
  avatar: String,
  account:String,
  password:String,

},
// { typeKey: '$type' }
)

module.exports = mongoose.model('User', User, 'User');