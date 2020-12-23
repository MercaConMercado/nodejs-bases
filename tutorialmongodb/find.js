var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');
    // dbo.collection('productos').findOne({}, function (err, res) { // busca y da solo 1 dato
    //dbo.collection('productos').find({}).toArray(function (err, res) { // busca y da todos los datos
    dbo.collection('productos').find({}, { projection: { _id: 0, name: 1, section: 1 } }).toArray(function (err, res) { // busca y con el projection: solo muestra los atributos del objeto que quiero en los documentos

        if (err) throw err;
        //console.log(res[0]);// solo trae el dato ubicado en el 1 campo del arreglo 
        console.log(res);
        db.close();

    });


});