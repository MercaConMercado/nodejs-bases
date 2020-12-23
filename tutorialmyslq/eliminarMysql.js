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

  var sql = "DELETE FROM usuarios WHERE Nombre = 'Daniel'"; // borrar
  conexion.query(sql, function (err, result) {
  if (err) throw err;
       console.log("Number of records deleted: " + result.affectedRows); // le dice cunatos numeros borro


  });
});

