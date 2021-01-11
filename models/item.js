var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item = new Schema({
    title: String,
    price: String,
    servings: String,
    location: String,
    ready_time: String,
    ingredients: String,
    description: String,
    imgUrl: String
});

module.exports = mongoose.model('Item', item);