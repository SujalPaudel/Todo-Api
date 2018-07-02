// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// Url where the database lies
MongoClient.connect('mongodb://localhost', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb Server", err);
  }
  console.log("Connected to MongoDb server");

  var db = client.db('TodoApp')

  db.collection('Users').find({
    name : 'Sujal Paudel'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log("Unable to fetch todos", err);
  })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Counts : ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log("Unable to count records", err);
  // })

});
