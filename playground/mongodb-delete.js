// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// Url where the database lies
MongoClient.connect('mongodb://localhost', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb Server", err);
  }
  console.log("Connected to MongoDb server");

  var db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((deleted) => {
  //   console.log(deleted);
  // }, (err) => {
  //   console.log("Sorry unable to delete");
  // });

  // deleteOne

  // db.collection('Todos').deleteOne({text : 'Eat Lunch'}).then((deleted) => {
  //   console.log(deleted);
  // }, (err) => {
  //   console.log("Unable to delete");
  // });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("Unable to delete the item");
  // });

  // deleteMany

  db.collection('Users').deleteMany({name : 'Sujal Paudel'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log("Unable to delete the record", err);
  });

  // findOneAndDelete

  db.collection('Users').findOneAndDelete({_id : 7}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log("Unable to delete the record", err);
  });

});
