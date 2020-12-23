//Cree un nuevo archivo vacío utilizando el método open():
var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.doc', 'w', function (err, file) { // se crea un documetno vacio
  if (err) throw err;
  console.log('Saved!');
});
