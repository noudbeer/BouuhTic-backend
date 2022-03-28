function createCategory(req, res) {
    let Category = require('../models/Category');
    let newCategory = Category ({
        title: req.body.title,
        description : req.body.description, 
        shop_id : req.body.shop_id
    });
  
    newCategory.save()
    .then((savedCategory) => {
        //send back the created category
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readCategories(req, res) {
    let Category = require("../models/Category");

    Category.find({})
    .then((categories) => {
        res.status(200).json(categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCategoriesShop(req, res) {
    let shop     = require("../models/Shop");
    let category = require("../models/Category");

    category.find({"shop_id": req.params.id})
    .then((categories) => {
        res.status(200).json(categories);
    }, (err) => {
        res.status(500).json(err);
    });
}

function readCategory(req, res) {
    let category = require("../models/Category");

    category.findById({_id : req.params.id})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategory(req, res) {
    let category = require("../models/Category");

    category.findByIdAndUpdate({_id: req.params.id}, 
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
    let category = require("../models/Category");

    category.findOneAndRemove({_id : req.params.id})
    .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {
    let category = require("../models/Category");

    category.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function undone(req, res) {
    let category = require("../models/Category");

    category.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createCategory;
module.exports.readsAll = readCategories;
module.exports.reads = readCategoriesShop;
module.exports.read = readCategory;
module.exports.delete = deleteCategory;
module.exports.update = updateCategory;
module.exports.done = done;
module.exports.undone = undone;