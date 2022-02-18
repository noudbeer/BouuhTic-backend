var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    title : String,
    description : String,
    product : [Product],
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Category', CategorySchema);