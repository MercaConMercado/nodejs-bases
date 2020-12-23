var conexion = require ('./conexionmondb.js');

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

conexion.MongoClient.connect(conexion.url, function(err, db) { // asi es como se trae los datos del nodo de conexion
  if (err) throw err;
  var dbo = db.db("mongodb"); // nombre de la base de datos
  // inserta un documento por medio de un objeto .json
  /*var myobj = { 
    name: "Iphone 11",
    section: "Phone"
  };*/
  var myobjs = [
    {status: "1", namestatus: "OnStock"},
    {status: "0", namestatus: "OffStock"},
    
  ];
  //dbo.collection("productos").insertOne(myobjs, function(err, res) { // isertar 1 documento en la coleccion
  dbo.collection("status").insertMany(myobjs, function(err, res) { // isertar varios documento en la coleccion

    if (err) throw err;
    console.log("Document Insert: "+ res.insertedCount); // + res.insertedCount
    //console.log(res);
    db.close();
  });
});

