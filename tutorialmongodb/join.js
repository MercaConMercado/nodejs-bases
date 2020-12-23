var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');//DB
    var colection = ('productos');// collections

    dbo.collection(colection).aggregate([ // consulta de campos de una collecion con otra collecion
        {
            $lookup:
            {
                from: 'status',
                localField: 'status',
                foreignField: 'status',
                as: 'namestatus'
            }
        }

    ]).toArray(function (err, res) {



        if (err) throw err;

        console.log(JSON.stringify(res));
        db.close();

    });



});