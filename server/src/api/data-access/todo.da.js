// todos.dao.js 

const Todo = require('../models/todo.model')

const getAllTodos = async () => {
  return await Todo.find()  
}

const getTodoById = async input => {
  return await Todo.findById(input)
} 

const createTodo = async input => {
  return await Todo.create(input) 
}

const deleteTodo = async input => {
  return await Todo.deleteOne(input) 
}

const updateTodo = async input => {
  return await Todo.findOneAndUpdate(input) 
}

// export DA functions 
module.exports = {
  getAllTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
  createTodo
}