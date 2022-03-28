var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title : String,
    description : String,
    category_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    quantity : Number,
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);