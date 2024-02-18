// todo.model.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Done'],
    default: 'Open'
  },
  flag: {
    type: String,
    enum: ['Red', 'Orange', 'Green'],
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;