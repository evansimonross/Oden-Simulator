var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_BASE
    });
}
connection.connect(function (err) {
    if (err) {
        console.error(err.stack);
    }
    else {
        console.log("Connected at " + connection.threadId);
    }
});
module.exports = connection;