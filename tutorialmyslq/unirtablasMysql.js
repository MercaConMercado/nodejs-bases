var conexion = require ('./conexion'); // traemos el modulo de esta forma
//var sql = "SELECT * FROM usuariosa"
//var createsql = "CREATE TABLE empresasa (id INT AUTO_INCREMENT PRIMARY KEY, cod VARCHAR(255))"; // crear tabla con encabezados para los registros}
//var columnSQL = "ALTER TABLE empresasa ADD COLUMN (cod VARCHAR(255))";  // si lña tabla ya esta asi se agrebga nuevas columnas sin borrar las

/**var insertsql =
    "INSERT INTO empresasa (cod, Empresa) VALUES ?"; // para agregar varios registros a la tabla se agrega ?
  var Datos = [
    // variable de dato para llamarlo mas adelante
    ['0001', 'Aireflex'],
    ['0002', 'Claro'],
    ['0003', 'sustane'],
    ['0004', 'colomix'],
    
      
  ];*/

  var unirsql = "SELECT usuariosa.Empresa AS usuariosa, empresasa.EMPRESA AS empresasa FROM usuariosa INNER JOIN empresasa ON usuariosa.Empresa = empresasa.cod"; 
  // este si no lo entendi :C , no inserta nada solo muestra el resultado

conexion.conn.query(unirsql, function (err, result, fields) {   // OJO con el conexion.conn llama la variable de llamado y la variable que esta en el otro modulo
    if (err) throw err;
      //console.log(result);// trae todos los resultados
      console.log("accion ok");
      console.log(result); // trae un campo espeficico del arreglo [].nombre de la tabla ya consultada en el query
    });
 