var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');//DB
    var colection = ('productos');// collections
    //var myquery = {name:'Motorola A5'}; // consulta para 1 atributo
    var myquerys = {name: /^Motorola/}; // consulta que tenga nombre Motorola

   // var mysort = { name: 1 }; // ordenar por nombre ascendente
    dbo.collection(colection).deleteMany(myquerys, function (err, res) { // deleteOne borra todo el objeto de la busqueda
        if (err) throw err;
        console.log(res.result.n +' Datos Borrados');
        db.close();

    });



});