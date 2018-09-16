var mysql = require("mysql");
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE
})
connection.connect(function(err){
    if (err){
        console.error(err.stack);
    }
    else{
        console.log("Connected at " + connection.threadId);
    }
});
module.exports = connection;