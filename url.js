var url = require('url'); // modulo de url 
// dividir url en partes legibles

var adr = 'http://localhost:8080/chungo.html?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080' saca el host primera parte
console.log(q.pathname); //returns '/default.htm' / saca eñ archivo
console.log(q.search); //returns '?year=2017&month=february' / saca lo consiguinete
 
var qdata = q.query; //returns an object: { year: 2017, month: 'february' } convierte en este caso el . search en data para la fecha
console.log(qdata.month); //returns 'february'


