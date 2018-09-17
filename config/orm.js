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
    insert: function(table, object, callback){
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, object], function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        })
    },
}

module.exports = orm;