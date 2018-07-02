var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
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

// var newTodo = new Todo({text: " Try this out"});

// newTodo.save().then((saved) => {
//   console.log("The Todo item is saved", saved);
// }, (err) => {
//   console.log("The item cannot be saved\n ", err);
// });

var newUser = new User({email: '      thesujal17@gmail.com    '});

newUser.save().then((success) => {
  console.log("Successfully added a user", success);
}, (err) => {
  console.log("Sorry the user cannot be added in the database", err);
});