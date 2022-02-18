//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/product", (req, res) => {
    res.json({"msg": "Create a product"});
});

//READ
router.get("/products", (req, res) => {
    res.json({"msg": "Read all the products"});
});

router.get("/product", (req, res) => {
    res.json({"msg": "Read a product"});
});

//UPDATE
router.put("/product", (req, res) => {
    res.json({"msg": "Update a product"});
});

//DELETE
router.delete("/product", (req, res) => {
    res.json({"msg": "Delete a product"});
});

module.exports = router;