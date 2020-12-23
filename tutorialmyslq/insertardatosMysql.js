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
  var SQL =
    "INSERT INTO usuariosa (Nombre, Apellido, Correo, Sexo, Edad, Celular) VALUES ?"; // para agregar varios registros a la tabla se agrega ?
  var Datos = [
    // variable de dato para llamarlo mas adelante
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939'],
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939'],
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939'],
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939'],
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939'],
    ['Daniel', 'Mercado', 'decodermc@gamil.com', 'Masculino', '25', '3192841939']
      
  ];
  // se agregan demasiados registros

  conexion.query(SQL, [Datos], function (err, result) {
    // se llama la variable de SQL y la de los datos
    if (err) throw err;
    console.log("campos agregados: " + result.affectedRows +" id: "+ result.insertId ); //  + result.affectedRows te informa cunatos campos agrego,  result.insertId trae el id del campo que se agrega
  });
});
/** cosas que se pueden sacar de SQL
{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
*/