var http = require('http'); // uncluye un modulo ya instalado por las librerias de nodejs transferir datos a través del protocolo de transferencia de texto hiper http  
var modulofecha = require('./myfirstmodule'); // ./ dice que el archivo esta en la misma carpeta

  http.createServer(function (req, res) { // metodo para crear el objeto servidor
  res.writeHead(200, {'Content-Type': 'text/html'}); // encabezado http, 200 esta todo correcto,contiene los encabezados de respuesta
  res.write(req.url);
  res.write("La fecha es: " + modulofecha.myDatetime()); // escribir y concatenar el modulo de externo definido ya en la variable
  
  res.end(); // termina la respeusta
  console.log('Daniel Ricardo Mercado Calderon') //registro de log en archivo , el se visualiza cunado consultan la apgina
}).listen(8080); // puerto que escucha 8080