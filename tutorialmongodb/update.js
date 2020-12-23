var conexion = require('./conexionmondb');
conexion.MongoClient.connect(conexion.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mongodb');//DB
    var colection = ('productos');// collections
    //var myquery = {name:"Xiaomi Mi Note 3"};    // objeto consulta a cambiar
    //var newvalues = {$set: {name: "Xiaomi Mi Note 4"}}; // dato actualizado , se peude poner los atributos que quieras    
    //var myquerys = {section:"Phone"};    // objeto consulta para cambiar varios datos
    var myquerys = {section: /^P/};    // consulta objeto que tenga la primera letra I

    var newvaluess = {$set: {status: "1"}}; // datos actualizados en todos los registros  , se puede colocar un atributo nuevo
    

        //dbo.collection(colection).updateOne(myquerys,newvaluess, function (err, res) { // uptadeOne , actualiza solo 1 campo
            dbo.collection(colection).updateMany(myquerys,newvaluess, function (err, res) { // updateMany actualiza todos los campos

        if (err) throw err;
        
        console.log(res.result.nModified+' Documents Update');
        db.close();

    });



});