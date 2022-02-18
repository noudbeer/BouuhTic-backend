function createProduct(req, res) {
    let Product = require('../models/product');
    let newProduct = Product ({
        title: req.body.title,
        description : req.body.description, 
        quantity : req.body.quantity
    });
  
    newProduct.save()
    .then((savedProduct) => {
        //send back the created product
        res.json(savedProduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProducts(req, res) {
    let Product = require("../models/Product");

    Product.find({})
    .then((products) => {
        res.status(200).json(products);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduct(req, res) {
    let Product = require("../models/product");

    Product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduct(req, res) {
    let Product = require("../models/product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description, 
        quantity  : req.body.quuantity}, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduct(req, res) {
    let Product = require("../models/product");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {
    let Product = require("../models/product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function undone(req, res) {
    let Product = require("../models/product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createProduct;
module.exports.reads = readProducts;
module.exports.read = readProduct;
module.exports.delete = deleteProduct;
module.exports.update = updateProduct;
module.exports.done = done;
module.exports.undone = undone;