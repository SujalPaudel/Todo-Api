// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



// Url where the database lies
MongoClient.connect('mongodb://localhost', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb Server", err);
  }
  console.log("Connected to MongoDb server");

  var db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert to do", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  //   client.close();

  // }); 

  // db.collection('Users').insertOne({
  //   name: "Sujal Paudel",
  //   age: 20,
  //   location: "Sahara Desert, Sudan"
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert the data in the collection", err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   client.close();
  // });


});