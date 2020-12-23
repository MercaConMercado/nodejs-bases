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
  //conexion.query("SELECT * FROM usuarios", function (err, result, fields) { // selecciona toda la tablay da los datos por el result y fields los campos
  conexion.query("SELECT Nombre, Apellido, Celular FROM usuarios", function (err, result, fields) {   // se trae un campo especifico de la tabla
  if (err) throw err;
    //console.log(result);// trae todos los resultados
    console.log(result[2].Celular); // trae un campo espeficico del arreglo [].nombre de la tabla ya consultada en el query
  });
});
