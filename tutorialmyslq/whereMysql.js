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
 // conexion.query("SELECT * FROM usuarios WHERE Nombre = 'Daniel'", function (err, result) {  // trae la consulta que le pidas en este caso analiza nombre y todos los registros de daniel , trae todos los campos
  conexion.query("SELECT * FROM usuarios WHERE Nombre LIKE 'd%'", function (err, result) {  // comodin que  trae registros que tengan la letra D
    console.log(result); 
   

  });
});
