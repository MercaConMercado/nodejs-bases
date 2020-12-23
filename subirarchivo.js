var http = require('http'); // cabecera en formato html
var formidable = require('formidable'); // modulo para crear archiv
var fs = require('fs'); // modulo para los nombres de los archivos 

http.createServer(function (req, res) { // crea el servidor
  if (req.url == '/fileupload') { // la cabecera cambia url 
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = './archivos/' + files.filetoupload.name; // ubicacion ./ lo dena en la misma carpeta
      console.log('Daniel Ricardo Mercado Calderon')
      fs.rename(oldpath, newpath, function (err) { // aca se renombra el archivo
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
        console.log('Subido');
      });
 });
  } else { // formulario HTML PARA subir el archivo
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    console.log('Daniel Ricardo Mercado Calderon');
    return res.end();
    
  }
}).listen(8080);