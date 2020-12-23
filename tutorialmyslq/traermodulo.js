var conexion = require ('./conexion'); // traemos el modulo de esta forma
var sql = "SELECT Nombre, Apellido, Celular FROM usuarios"
conexion.conn.query(sql, function (err, result, fields) {   // OJO con el conexion.conn llama la variable de llamado y la variable que esta en el otro modulo
    if (err) throw err;
      //console.log(result);// trae todos los resultados
      console.log(result); // trae un campo espeficico del arreglo [].nombre de la tabla ya consultada en el query
    });
 