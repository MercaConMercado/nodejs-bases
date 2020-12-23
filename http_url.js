var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // pone en la url lo que escriba en el body
  res.end();
}).listen(8080);