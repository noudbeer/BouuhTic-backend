//Access the router on Express 
const router = require('express').Router();

const controller = require('../controllers/shop');

//CREATE
router.post("/shop", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/shops", (req, res) => {
    controller.reads(req, res);
});

router.get("/shop/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/shop/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/shop/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/shop/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/shop/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;