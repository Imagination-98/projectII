const mongoose = require('mongoose')

const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;

const Cart = new Schema({
product_id: String,
product_name: String,
product_price: Number,
quantity: Number,
total_price: Number
},
// { typeKey: '$type' }
)

module.exports = mongoose.model('Cart', Cart, 'Cart');