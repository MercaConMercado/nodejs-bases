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
  conexion.query("SELECT Nombre, Apellido, Celular FROM usuarios", function (err, result, fields) {   // se trae un campo especifico de la tabla
  if (err) throw err;
    //console.log(fields); // trae las caracteristicas de los encabezados de los campos
    console.log(fields[3].name); // trae el nombre del encabezado de las columnas como arreglo empeznado desde 0 REFERENCIADO CON EL QUERY DE ARRIBA

  });
});
