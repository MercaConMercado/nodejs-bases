//este modulo permite solo visualizar url correctas , el resto mostrara error 404
var http = require('http'); // modulo http
var url = require('url'); // modulo url

var fs = require ('fs');// archivos

http.createServer(function (req, res) { // crear el servidor
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});  //codigo estandar para leer el html y el formato
      res.write(data); // estandar
      return res.end(); // finalizar y retornar
    });
  }).listen(8080); //puerto



  