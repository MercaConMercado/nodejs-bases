var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');//DB
    var colection = ('productos');// collections
        
            dbo.collection(colection).find({},{ projection: { _id: 0 } }).limit(0).toArray(function(err, res) { // consulta limitada a mostrar solo los 2 primeros datos del arreglo

        if (err) throw err;
        
        console.log(res);
        db.close();

    });



});