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
    }
}

module.exports = orm;