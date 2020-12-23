var mysql = require('mysql');

var conexion = mysql.createConnection({
  database: 'mydb',
  user: 'root',
  password: '',
  host: 'localhost'

});

conexion.connect(function (err) {
  if (err) throw err;
  console.log('Conectado');

  var sql = 'DROP TABLE IF EXISTS empresas'; // elimina la tabla y refiere si la tabla esta , si no esta no arrojara error
  conexion.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Tabla Borrada. '+ '¿ No Existe ? ' + result.warningCount); // result si es 1 es que la tabla no existe , si es 0 la tabla existio y la borro

  });



});