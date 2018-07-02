var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text : 'Code and Drink Tea'
// });

// newTodo.save().then((saved) => {
//   console.log("The data is saved", saved);
// }, (error) => {
//   console.log("Unable to save the data", error);
// });

var newTodo = new Todo({
  text: 'Code and Drink Tea simultaneously',
  completed: true,
  completedAt: 1730
});

newTodo.save().then((saved) => {
  console.log("The Todo item is saved", saved);
}, (err) => {
  console.log("The item cannot be saved", err);
});
