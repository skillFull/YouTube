const MongoClient = require('mongodb').MongoClient;
let Start = Date.now()
const url = 'mongodb://localhost:27017';
const dbName = 'test';
let data;

MongoClient.connect(url, function(err, client) {
  if(err){
    console.error(err)
  }
  const db = client.db(dbName);
  const collection = db.collection('Youtube');
  collection.find({}).toArray((err, docs) => { 
    if (err ){
      console.error(err)
    }
     data = docs
     module.exports = data ;
  })
  client.close();
  
});

