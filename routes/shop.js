//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/shop", (req, res) => {
    res.json({"msg": "Create a shop"});
});

//READ
router.get("/shops", (req, res) => {
    res.json({"msg": "Read all the shops"});
});

router.get("/shop", (req, res) => {
    res.json({"msg": "Read a shop"});
});

//UPDATE
router.put("/shop", (req, res) => {
    res.json({"msg": "Update a shop"});
});

//DELETE
router.delete("/shop", (req, res) => {
    res.json({"msg": "Delete a shop"});
});

module.exports = router;