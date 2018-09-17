var express = require("express");
var router = express.Router();

var oden = require("../models/oden.js");

router.get("/api/ingredients", function(req, res){
    oden.all("ingredients", function(data){
        res.json(data);
    })
});

router.post("/api/ingredients", function(req, res){
    oden.newIngredient(res.body.type_id, function(data){
        res.json({id: data.insertId});
    });
})

router.get("/api/types", function(req, res){
    oden.all("types", function(data){
        res.json(data);
    })
});

router.post("/api/types", function(req, res){
    oden.newIngredient(res.body.name, function(data){
        res.json({id: data.insertId});
    });
})

module.exports = router;