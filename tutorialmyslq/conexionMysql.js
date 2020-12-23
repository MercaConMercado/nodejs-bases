var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  database: 'mysql', 
  user: 'root',
  password: ''

  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});


