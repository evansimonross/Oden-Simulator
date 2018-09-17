var connection = require("./connection.js");

var orm = {
    all: function(table, callback){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    newType: function(type, callback){
        var queryString = "INSERT INTO types (name) VALUES (?)";
        connection.query(queryString, type, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    newIngredient: function(type_id, callback){
        var queryString = "INSERT INTO ingredients (type_id) VALUES (?)";
        connection.query(queryString, type_id, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    }
}

module.exports = orm;