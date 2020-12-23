var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("html/sol.html", function (err, xdata) {
      // jalando el archivo con el metodo de lectura
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(xdata);
      return res.end();
    });
  })
  .listen(8080);
