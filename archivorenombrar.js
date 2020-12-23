var fs = require("fs");
// renombrar archivo
fs.rename("mynewfile1.txt", "mynewfile1.txt", function (err) { //cambia nombre y si quiere tmabien extencion
  // nombre que tiene ahora , nombre que va a tener
  if (err) throw err; //... tambien se puede cambiar las extenciones
  console.log("Archivo renombrado");
  fs.writeFile("mynewfile1.txt", " Las mentiras de tu ex", function (err) { // remplaza el contenido del archivo
    if (err) throw err;
    console.log("contenido archivo remplazado");
  });
 
});

