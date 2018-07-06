const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb Server", err);
  }
  console.log("Connected to MongoDb server");

  var db = client.db('TodoApp');

  db.collection('todos').findOneAndUpdate({
    _id : new ObjectID('5b3ec739ba53f4c5ad1ee15d')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('users').findOneAndUpdate({
    name : "Sujal Paudel" 
  }, {
    $set : {
      name : "A coder wannabe"
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })

  });
