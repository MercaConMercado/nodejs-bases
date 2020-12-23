var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');
   // var query = {name:'Phocophone F1'}; // atributo especifico a consultar de los objetos
   var query = {name:/^M/}; // atributos que con tengan la M


   
    // dbo.collection('productos').findOne({}, function (err, res) { // busca y da solo 1 dato
    //dbo.collection('productos').find({}).toArray(function (err, res) { // busca y da todos los datos
    dbo.collection('productos').find(query, { projection: { _id: 0, name: 1, section: 1 } }).toArray(function (err, res) { // busca y con el projection: solo muestra los atributos del objeto que quiero en los documentos

        if (err) throw err;
       
        console.log(res);
        db.close();

    });


});