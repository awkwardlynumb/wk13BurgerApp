const burgers = require("../models/burger.js")
const router = require("express").Router();

router.get("/", function(req, res) {
    burgers.selectBurgers(function(result) {
        res.render("index", {burgers:result});
    })
});

module.exports = router;