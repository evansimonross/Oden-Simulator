var orm = require("../config/orm");

var oden = {
    allIngredients: function(callback){
        orm.all("ingredients", callback);
    },
    allTypes: function(callback){
        orm.all("types", callback);
    },
    newIngredient: function(type_id, callback){
        var object = {type_id: type_id};
        orm.insert("ingredients", "type_id", object, callback);
    },
    newType: function(name, callback){
        var object = {name: name};
        orm.insert("types", "name", object, callback);
    }
}