var connection = require("./connection.js");

var orm = {
    all: function(table, callback){
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    select: function(table, condition, callback){
        var queryString = "SELECT * FROM ?? WHERE ?;";
        connection.query(queryString, [table, condition], function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    insert: function(table, object, callback){
        var queryString = "INSERT INTO ?? SET ?;";
        connection.query(queryString, [table, object], function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    update: function(table, object, condition, callback){
        var queryString = "UPDATE ?? SET ? WHERE ?;";
        connection.query(queryString, [table, object, condition], function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        })
    },
    delete: function(table, condition, callback){
        var queryString = "DELETE FROM ?? WHERE ?;";
        connection.query(queryString, [table, condition], function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    join: function(select, leftTable, rightTable, leftColumn, rightColumn, callback){
        var queryString = "SELECT ?? FROM ?? AS lt LEFT JOIN ?? AS rt ON lt.?? = rt.??;";
        connection.query(queryString, [select, leftTable, rightTable, leftColumn, rightColumn], function(err,data){
            if(err){
                throw err;
            }
            callback(data);
        });
    },
    joinTest: function(callback){
        var queryString = "SELECT ingredients.id, type_id, name, devoured FROM ingredients LEFT JOIN types ON ingredients.type_id = types.id;"
        connection.query(queryString, function(err, data){
            if(err){
                throw err;
            }
            callback(data);
        });
    }
}

module.exports = orm;