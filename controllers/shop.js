function createShop(req, res) {
    let Shop = require('../models/Shop');
    console.log(req)
    let newShop = Shop ({
        name: req.body.name,
    });
  
    newShop.save()
    .then((savedShop) => {
        //send back the created shop
        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readShops(req, res) {
    let Shop = require("../models/Shop");

    Shop.find({})
    .then((shops) => {
        res.status(200).json(shops);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readShop(req, res) {
    let Shop = require("../models/Shop");

    Shop.findById({_id : req.params.id})
    .then((shop) => {
        res.status(200).json(shop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateShop(req, res) {
    let Shop = require("../models/Shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name}, 
        {new : true})
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteShop(req, res) {
    let Shop = require("../models/Shop");

    Shop.findOneAndRemove({_id : req.params.id})
    .then((deletedShop) => {
        res.status(200).json(deletedShop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {
    let Shop = require("../models/Shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

function undone(req, res) {
    let Shop = require("../models/Shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createShop;
module.exports.reads = readShops;
module.exports.read = readShop;
module.exports.delete = deleteShop;
module.exports.update = updateShop;
module.exports.done = done;
module.exports.undone = undone;