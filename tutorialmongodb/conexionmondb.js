var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"; // base que se quiere crear , MongoDB creará la base de datos si no existe y establecerá una conexión con ella.

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Conected MongoDB");
  db.close();
});

exports.url = url ; // esta funcion exporta todo el modulo
exports.MongoClient = MongoClient ; // esta funcion exporta todo el modulo
// ojo MongoDB espera hasta que haya creado una colección (tabla), con al menos un documento (registro) antes de crear realmente la base de datos (y la colección).