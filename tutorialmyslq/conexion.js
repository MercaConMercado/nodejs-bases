var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost', user: 'root', password: '', database: 'mydb'

});
conn.connect(function (err) {
    if (err) throw err;
    console.log('SQL OK')
});

exports.conn = conn ; // esta funcion exporta todo el modulo

    


