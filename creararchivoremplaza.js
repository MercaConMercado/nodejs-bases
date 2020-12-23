var fs = require('fs');
//El método reemplaza el archivo y el contenido especificados si existe. Si el archivo no existe, se creará un nuevo archivo que contenga el contenido especificado
fs.writeFile('mynewfile1.xml', 'Como papitas', function (err) { // 
  if (err) throw err;
  console.log('Saved!');
});