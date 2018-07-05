const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }, (fail) => {
//   console.log("Failed");
// });

Todo.findByIdAndRemove('5b3dfc0839a00ec03954f4c0').then((todo) => {
  console.log("Deleted the todo \n ", todo);
});
