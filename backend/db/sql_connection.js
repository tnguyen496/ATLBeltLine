const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567890',
    port: 3306,
    database: 'ATLBeltline'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
});
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0].solution)
// });
  
// connection.end()

module.exports = connection;