// USO EXPRES , frameworck de nodejs que permite crear aplicaicones web del lado del servidor
const appserver = {};// objeto para importar a otros modulos el servidor

const express = require('express'); // frameworck que mete atributos para el servidor
const colors = require('colors');
//const port = 5000; // puerto para trasnmitir
const app = express(); // este es el servidor
const morgan = require('morgan');

/**************************
 * SETINGS
 */
app.set('AppName', 'Expres Tutorial'); // parametros primer lugar nombre de variable, segundo parametro de la variable
app.set('port', 5000); // configuracion del puerto
/*IMPORTANTE*/app.set('view engin', 'ejs'); // npm i ejs , importante motos de HTML para express perfecto. renderiza los index

//FUNCIONES
// OJO SI QUIERES PROCESAR ALGO DEBES USAR UN MILDDLE WARE Y SE DEBE COLCOAR ANTES DE LAS RUTAS PARA QUE FUNCIONE
/*
function logger(req, res, next) { // Middle Wares: manejador de peticion que se ejecuta antes de llegar a cualquier ruta , esta registra las peticiones que llegan al servidor
    console.log(`Url Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`); // trae la ruta de navegacion
    next();
} // todos los middlewares se ejecutan usando app.use
*/
//app.use(logger);
/**************************
 * MILDDLE WARES
 */
app.use(morgan('tiny'));
app.use(express.json()); // para traer post del navegador formato json.



/**************************
 * RUTAS
 */

app.all('/users', function (req, res, next) { // el next hace pasar al siguiente proceso
    console.log('Paso al Garete');
    //res.end('suanfason'); 
    next();
}); // para cualquier ruta podemos hacer algo antes de lelgar a la ruta  , ruta especifica /users 



/*app.get('/', function (req, res) { // la ruta de busqueda principal
    res.send('<h1>ENVIAR OK <BR>Inicio Usando express</h1>')
    res.end();
});*/


/********************************
Instancia del motod de Plantilla
********************************/
app.get('/', function (req, res) {
    const data = [{ name: 'daniel' }, { name: 'ricardo' }, { name: 'mercado' }, { name: 'calderon'}];
    res.render('index.ejs', { name: data }); // renderiza archivo de carpeta views el index.ejs , puede tambien pintar objetos de manera rapida y dinamica
});

app.get('/users', function (req, res) {
    res.json({// tambien podemos enviar un objeto json
        usuario: 'MercaConMercado',
        nombres: 'Daniel Ricardo',
        apellidos: 'Mercado Calderon'
    });
    res.end();
});

app.post('/users/:id', function (req, res) { // la secundaria obout
    console.log(req.body); // recive objeto json (Cuerpo de la peticion)
    console.log(req.params); // recive el parametro (parametro de la peticion), lo que se agrega despues del /users/xxxx 
    res.send('<h1>RECIBIR OK <BR>About Usando express</h1>')
    res.end();
});

app.put('/users/:id', function (req, res) { // la secundaria contact
    console.log(req.body);
    res.send(`User ${req.params.id} Update`);
    // res.send('<h1>ACTUALIZAR OK <BR>Contact Usando express</h1>')
    res.end();
});

app.delete('/users/:id', function (req, res) { // la secundaria test
    res.send(`User ${req.params.id} Deleated`);
    res.end();
});



/********************************************************************* 
 ESTE PUBLIC ES EL NOMBRE DE LA CARPETA Y SE EJECUTA EL INDEX.HTML
 ********************************************************************/

app.use(express.static('public')); // Middle ware static File , RUTA FINAL CUNADO NO ENCUENTRA NINGUN PRVALIDADOR MUESTRA ESO





app.listen(app.get('port'), function () {
    console.log(app.get('AppName'));
    console.log('Server OK port: '.bgBlue, app.get('port'));
});

//Instancia de funciones
appserver.express = express;
appserver.colors = colors;
//appserver.port = port;
appserver.app = app;

//exporta todo este modulo
module.exports = appserver;