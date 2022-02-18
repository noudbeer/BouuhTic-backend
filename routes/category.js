//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/category", (req, res) => {
    res.json({"msg": "Create a category"});
});

//READ
router.get("/categories", (req, res) => {
    res.json({"msg": "Read all the categories"});
});

router.get("/category", (req, res) => {
    res.json({"msg": "Read a category"});
});

//UPDATE
router.put("/category", (req, res) => {
    res.json({"msg": "Update a category"});
});

//DELETE
router.delete("/category", (req, res) => {
    res.json({"msg": "Delete a category"});
});

module.exports = router;