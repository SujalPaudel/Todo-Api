const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = "5b3c9333a1a195247842072811";

var UserId = "5b3a23b12ff0fc7a6942560a";

if(!ObjectID.isValid(id)){
  console.log("The id inserted is invalid");
}

Todo.find({
  _id : id  //mongoose can directly do that without the need of ObjectID
}).then((todo) => {
    console.log(todo);
}, (err) => {
  console.log("This is the error from this");
});

Todo.findOne({
  completed : false
}).then((todo) => {
  console.log("Todo", todo);
}, (err) => {
  console.log("This is the error from this");
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log("Id not found");
  }
  console.log(todo);
}, (err) => {
  console.log("Please put the valid id");
});


User.findById(UserId).then((user) => {
  if(!user){
    return console.log("No user of that id exists");
  }
  console.log(user);
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log("The error from err");
});