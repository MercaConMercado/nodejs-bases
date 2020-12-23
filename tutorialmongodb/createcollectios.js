var conexion = require ('./conexionmondb.js');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

conexion.MongoClient.connect(conexion.url, function(err, db) { // asi es como se trae los datos del nodo de conexion
  if (err) throw err;
  var dbo = db.db("mongodb"); // nombre de la base de datos
  dbo.createCollection("status", function(err, res) { // nombre de la colexion 
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//MongoDB espera hasta que haya insertado un documento antes de crear realmente la colección.