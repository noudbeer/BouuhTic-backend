function createCategory(req, res) {
    let Category = require('../models/category');
    let newCategory = Category ({
        title: req.body.title,
        description : req.body.description, 
        product : req.body.product
    });
  
    newCategory.save()
    .then((savedCategory) => {
        //send back the created category
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategorys(req, res) {
    let Category = require("../models/category");

    Category.find({})
    .then((categorys) => {
        res.status(200).json(categorys);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCategory(req, res) {
    let Category = require("../models/category");

    Category.findById({_id : req.params.id})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategory(req, res) {
    let Category = require("../models/category");

    Category.findByIdAndUpdate({_id: req.params.id}, 
        {title: req.body.title,
        description : req.body.description, 
        product : req.body.product}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategory(req, res) {
    let Category = require("../models/category");

    Category.findOneAndRemove({_id : req.params.id})
    .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {
    let Category = require("../models/category");

    Category.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function undone(req, res) {
    let Category = require("../models/category");

    Category.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createCategory;
module.exports.reads = readCategorys;
module.exports.read = readCategory;
module.exports.delete = deleteCategory;
module.exports.update = updateCategory;
module.exports.done = done;
module.exports.undone = undone;