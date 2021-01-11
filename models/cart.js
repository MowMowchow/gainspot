var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var cart = new Schema({
    geoip: String,
    items:[{type: ObjectId, ref:'Item', amt: Number}]
});

module.exports = mongoose.model('Cart', cart);