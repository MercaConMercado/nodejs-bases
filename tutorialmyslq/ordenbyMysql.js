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

  //conexion.query("SELECT * FROM usuarios ORDER BY Nombre", function (err, result) { // Ordena por orden alfabetico en por nombres ascendente
    conexion.query("SELECT * FROM usuarios ORDER BY Nombre DESC", function (err, result) { // Ordena por orden alfabetico en por nombres descendente  DESC
    if (err) throw err;
       console.log(result);


  });
});

