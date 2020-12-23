var fs = require('fs');
//elimina archivos
fs.unlink('mynewfile1.dox', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});