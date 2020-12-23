var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('proyect');//DB
    var colection = ('productos');// collections
    
   // var mysort = { name: 1 }; // ordenar por nombre ascendente
    //dbo.collection(colection).drop(function (err, res) { // drop borra la coleccion especificada
        dbo.dropCollection(colection, function (err, res) { // dropCollecion borra la coleccion especificada

        if (err) throw err;
        if (res);
        console.log('Collection drop');
        db.close();

    });



});