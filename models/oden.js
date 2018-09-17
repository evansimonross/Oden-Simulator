var orm = require("../config/orm");

var oden = {
    allIngredients: function(callback){
        orm.all("ingredients", callback);
    },
    allTypes: function(callback){
        orm.all("types", callback);
    },
    newIngredient: function(object, callback){
        orm.insert("ingredients", object, callback);
    },
    newType: function(object, callback){
        orm.insert("types", object, callback);
    },
    updateIngredient: function(object, callback){
        var condition = {id: object.id};
        orm.update("ingredients", object, condition, callback);
    },
    updateType: function(object, callback){
        var condition = {id: object.id};
        orm.update("types", object, condition, callback);
    }
}

module.exports = oden;