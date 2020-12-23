var mysql = require("mysql");

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

conexion.connect(function (err) {
  if (err) throw err;
  console.log("Conectado");

  var Nombre = ''; // escape lo que hace es definir la consulta como variable
  var Apellido = 'Mercado';
  //var sql = 'SELECT * FROM usuarios WHERE Apellido = '+ mysql.escape(escape);// y se consulta de esta manera 
  var sql = 'SELECT * FROM usuarios WHERE Nombre = ? OR Apellido =?';// otra manera de traer el escape de la consulta
  conexion.query(sql, [Nombre, Apellido], function (err, result) {
    console.log(result);


  });
});

