//Access the router on Express 
const router = require('express').Router();

const controller = require('../controllers/product');

//CREATE
router.post("/product", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/products", (req, res) => {
    controller.reads(req, res);
});

router.get("/product/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/product/:id", (req, res) => {
    controller.delete(req, res);
});

//DELETE
router.delete("/product/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/product/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/product/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;