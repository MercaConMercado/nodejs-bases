var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!"); // conexion
  var SQL = "CREATE TABLE usuariosa (id INT AUTO_INCREMENT PRIMARY KEY, Empresa VARCHAR(255), address VARCHAR(255), registro TIMESTAMP)"; // crear tabla con encabezados para los registros
  //var SQL = "ALTER TABLE USUARIOS ADD COLUMN (SIPA VARCHAR(255), sopa VARCHAR(255))";  // si lña tabla ya esta asi se agrebga nuevas columnas sin borrar las
  con.query(SQL, function (err, result) {
    if (err) throw err;
    console.log("Table created"); // ya creo la tabla
  });
});
