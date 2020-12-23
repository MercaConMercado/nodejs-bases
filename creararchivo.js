var fs = require('fs');
// agrega contenido al archivo exitente si hay , si no .... lo crea 
//create a archivo named mynewfile1.txt:
fs.appendFile('mynewfile1.xml', ' te ami!', function (err) { // nombre del documento y el contenido , la extencion se puede modificar , aqui el contenido del archivo se escribe
  if (err) throw err;
  console.log('Archivo Creado');
});



