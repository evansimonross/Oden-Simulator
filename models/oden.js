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
    // For some reason, the mysql query is telling me that the column "ingredients.id" doesn't exist when I escape it out. 
    // Currently I have it hardcoded in under the joinTest orm function because I can't figure out a way around it...
    allIngredients: function(callback){
        orm.joinTest(callback);
        //var select = ["ingredients.id", "type_id", "name", "devoured"];
        //orm.join("ingredients", "id", select, "ingredients", "types", "type_id", "id", callback);
    },
    allTypes: function(callback){
        orm.all("types", callback);
    },
    selectType: function(condition, callback){
        orm.select("types", condition, callback);
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
        orm.delete("types", condition, (data)=>{
            var typeData = data;
            this.deleteIngredient({type_id: condition.id}, (data)=>{
                var ingredientData = data;
                callback(ingredientData, typeData);
            });
        });
    }
}

module.exports = oden;