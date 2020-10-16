function findDocuments(db, callback) {
  // Get the documents collection
  const collection = db.collection('Youtube');
  // Find some documents
  collection.find({} ).toArray(function(err, docs) {
    assert.equal(err, null);
    module.exports = docs
    callback(docs);
  });
}

// use the findDocuments() function
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
    client.close();
  });
});