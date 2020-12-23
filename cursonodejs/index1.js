const http = require('http');
const color =require('colors');
const parametroserv = function(req, res, err){
    res.writeHead(200, { 'Content-Type': 'text/html' });//codigo de estado http // 200 okey 
    res.write('<h1>Entraste aqui</h1>');
    res.write('dani merquis');
    if(err){
        console.log(err.red);
    }
    res.end();

};

const crearserv = http.createServer(parametroserv);

crearserv.listen(3000, function(){
    console.log('Servidor OK , Port: 300'.bgBlue)
});