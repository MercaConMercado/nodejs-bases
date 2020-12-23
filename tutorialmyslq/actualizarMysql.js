var mysql = require('mysql');
var conbase = mysql.createConnection({
  host: 'localhost', user: 'root', password: '', database: 'mydb'

});

conbase.connect(function (err) {
  if (err) throw err;
  console.log('Conected SQL ok');
  var update = "UPDATE usuarios SET Nombre = 'camila' WHERE Nombre = 'Daniela'";    // actualiza campos , el primero es como quiero que quede , el segundo es como esta en la columna
  
  conbase.query(update, function (err, result) {
    if (err) throw err;
    //console.log('ACTUALIZADO');
    console.log(result.affectedRows + " record(s) updated"); // informa cunatos campos se editaron

  });
/**
  var datos ="SELECT * FROM usuarios";  
  conbase.query(datos, function (err, result) {
    if (err) throw err;
    //console.log('ACTUALIZADO');
    console.log(result);
  });
   */

});

