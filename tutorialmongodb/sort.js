var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');//DB
  var colection = ('productos');// collections
  var mysort = { name: -1 }; // ordenar por nombre descendente

   // var mysort = { name: 1 }; // ordenar por nombre ascendente
    dbo.collection(colection).find({}, { projection: { _id: 0, name: 1, section: 1 } }).sort(mysort).toArray(function (err, res) { // el sort ordena segun el atributo que se le da
        if (err) throw err;
        console.log(res);
        db.close();

    });



});