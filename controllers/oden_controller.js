var express = require("express");
var router = express.Router();

var oden = require("../models/oden.js");

// handlebars routes

router.get("/", function(req, res){
    oden.all(function(ingredients, types){
        var data = {
            ingredients: ingredients,
            types: types
        }
        res.render("index",data);
    })
});

// api routes

router.get("/api/ingredients", function(req, res){
    oden.allIngredients(function(data){
        res.json(data);
    })
});

router.post("/api/ingredients", function(req, res){
    oden.newIngredient(req.body, function(data){
        res.json({id: data.insertId});
    });
})

router.put("/api/ingredients", function(req, res){
    oden.updateIngredient(req.body, function(data){
        res.json({affectedRows: data.affectedRows});
    })
})

router.delete("/api/ingredients", function(req, res){
    oden.deleteIngredient(req.body, function(data){
        res.json({affectedRows: data.affectedRows});
    })
})

router.get("/api/types", function(req, res){
    oden.allTypes(function(data){
        res.json(data);
    })
});

router.get("/api/types/:id", function(req, res){
    oden.selectType({id: req.params.id}, function(data){
        res.json(data);
    });
});

router.post("/api/types", function(req, res){
    oden.newType(req.body, function(data){
        res.json({id: data.insertId});
    });
})

router.put("/api/types", function(req, res){
    oden.updateType(req.body, function(data){
        res.json({affectedRows: data.affectedRows});
    })
})

router.delete("/api/types", function(req, res){
    oden.deleteType(req.body, function(data){
        res.json({affectedRows: data.affectedRows});
    })
})

module.exports = router;