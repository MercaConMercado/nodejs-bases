/*const opmatematicas= require('./opmatematicas.js');*/
//const os = require('os'); // lbreria del propio sistema operativo
// se llaman metodos platform() .....
/*console.log(os.platform());
console.log(os.release());
console.log('free mem: ' , os.freemem());
console.log('total mem: ', os.totalmem());*/

/*console.log(opmatematicas);
console.log(opmatematicas.sumar(1,0)); llamar las funciones matematicas del modulo
console.log(opmatematicas.restar(1,0));
console.log(opmatematicas.multiplicar(1,0));
console.log(opmatematicas.dividir(1,5));*/

const fs = require('fs');
// ESCRITURA estuctura del write file recibe: nombre del archivo y direccion para guardar, contenido , colback (funcion que se ejecuta cunado termina la creacion del archivo) 
/*fs.writeFile('./texto.doc','hola',function(err){
    if(err){
        console.log('error',err)
        throw err
    } 
    console.log('file create')
});*/

// LECTURA estuctura del read file recibe: nombre del archivo que quiero leer y donde esta guardado, contenido , colback (funcion que se ejecuta cunado termina la creacion del archivo) 
fs.readFile('./texto.doc', function(err, res){
    if(err){
        console.log('error: ',err);
        throw err;
    }
    console.log(res.toString()); // los datos e muestran asi Buffer 68 6f 6c 61> , toString convirte los datos para leerlos
});