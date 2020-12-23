var uc = require('upper-case')
var http = require('http')


http.createServer(function(req, res){
res.writeHead(200, {'Content-Type':'Text/html'})
res.write(uc.upperCase("Que se dice"));
res.end();


}).listen(8081);