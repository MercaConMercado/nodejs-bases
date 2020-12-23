// USO EXPRES
const express = require('express');
const color = require('colors');

const server = express();

server.get('/', function (req, res) {
    res.send('<h1>Usando express</h1>')
    res.end();
});

server.listen(3000, function () {
    console.log('Server 2'.yellow);
});
