var mysql = require('mysql');
var connect = mysql.createConnection({
host: 'localhost', user: 'root', password: '', database: 'mydb'

});

connect.connect(function(err){
if(err) throw err;
console.log('SQL OK')
//var limit = "SELECT * FROM usuarios LIMIT 5"; // Limite de consulta de solo 5 datos
//var limit = "SELECT * FROM usuarios LIMIT 5 OFFSET 3"; // Limite de consulta de solo 5 datos APARTIR DEL REGISTRO 4 QUE EMPIEZA DESDE EL 0 por que es arreglo
var limit = "SELECT * FROM usuarios LIMIT 3, 5"; // otra forma de limit dar datos desde el registro 4 y mostrar 5

connect.query(limit, function(err, result){
  if(err) throw err;
  console.log('tu consulta: ');
  console.log(result)


});

});