var orm = require("../config/orm");

var oden = {
    all: function (callback){
        orm.all("types", (data)=>{
            var types = data;
            this.allIngredients((data) => {
                var ingredients= data;
                callback(ingredients, types);
            });
        });
    },
    allIngredients: function(callback){
        var select = ["type_id", "name", "devoured"];
        orm.join(select, "ingredients", "types", "type_id", "id", callback);
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
    },
    deleteIngredient: function(condition, callback){
        orm.delete("ingredients", condition, callback);
    },
    deleteType: function(condition, callback){
        orm.delete("types", condition, callback);
    }
}

module.exports = oden;