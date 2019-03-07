var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var bObject = {
            burger: data
        };
    console.log(bObject);
    
    res.render("index", bObject);
    });
});

router.get("/api", function(req, res){
    burger.selectAll(function(data){
        res.json(data);
    })
});

router.post("/insertOne", function (req, res) {
    //passes data into HTML         
    //call it random name - potato    
    burger.insertOne(req.body.burger_name, function (colVal) {
        //redirects it to main page
        res.redirect("/")
    });
});

router.post("/updateOne/:id", function (req, res) {
     
    var condition = "id = " + req.params.id;
    burger.updateOne({
        // Use updateOne from burger.js
        devoured: req.body.devoured
    }, condition, function () {
        //redirects it to main page                         
        res.redirect("/");
    });
});





module.exports = router;