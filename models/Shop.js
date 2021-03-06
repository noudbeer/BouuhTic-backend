var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopSchema = new Schema({
    name : String,
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Shop', ShopSchema);