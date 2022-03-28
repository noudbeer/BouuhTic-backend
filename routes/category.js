//Access the router on Express 
const router = require('express').Router();

const controller = require('../controllers/category');

//CREATE
router.post("/category", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/categories", (req, res) => {
    controller.readsAll(req, res);
});

router.get("/shop/:id/categories", (req, res) => {
    controller.reads(req, res);
});

router.get("/category/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/category/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/category/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/category/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/category/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;