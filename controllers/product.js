function createProduct(req, res) {
    let Product = require('../models/Product');
    let newProduct = Product ({
        title: req.body.title,
        description : req.body.description, 
        quantity : req.body.quantity,
        category_id : req.body.category_id
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

function readProductsCategory(req, res) {
    let Product = require("../models/Product");

    Product.find({"category_id": req.params.id})
    .then((products) => {
        res.status(200).json(products);
    }, (err) => {
        res.status(500).json(err);
    });
}

function readProduct(req, res) {
    let Product = require("../models/Product");

    Product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduct(req, res) {
    let Product = require("../models/Product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {
            title : req.body.title, 
            description : req.body.description, 
            quantity  : req.body.quantity,
            category_id : req.body.category_id
        }, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduct(req, res) {
    let Product = require("../models/Product");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {
    let Product = require("../models/Product");

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
    let Product = require("../models/Product");

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
module.exports.readsAll = readProducts;
module.exports.reads = readProductsCategory;
module.exports.read = readProduct;
module.exports.delete = deleteProduct;
module.exports.update = updateProduct;
module.exports.done = done;
module.exports.undone = undone;