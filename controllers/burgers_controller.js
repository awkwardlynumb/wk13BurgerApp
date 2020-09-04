const burgers = require("../models/burger.js")
const router = require("express").Router();

router.get("/", function(req, res) {
    burgers.selectBurgers(function(result) {
        res.render("index", {burgers:result});
    })
});

router.post("/api/burgers", function(req, res) {
    burgers.addBurger(req.body.name, function(result){
        console.log(req.body)
        res.json({id: result.id})
    })
})

router.put("api/burgers/:id", function(req, res){
    burgers.devour(req.params.id, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports = router;