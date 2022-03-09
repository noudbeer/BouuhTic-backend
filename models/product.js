var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title : String,
    category : Category,
    shop : Shop,
    description : String,
    quantity : int,
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);