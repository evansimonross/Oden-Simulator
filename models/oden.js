var orm = require("../config/orm");

var oden = {
    all: (callback) =>{
        orm.all("ingredients", (data)=>{
            var ingredientData = data;
            orm.all("types", (data) => {
                var typeData = data;
                callback(ingredientData, typeData);
            });
        });
    },
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
    },
    deleteIngredient: function(condition, callback){
        orm.delete("ingredients", condition, callback);
    },
    deleteType: function(condition, callback){
        orm.delete("types", condition, callback);
    }
}

module.exports = oden;