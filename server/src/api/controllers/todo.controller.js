// todos.controller.js

const {
  crateTodoUC,
  deleteTodoUC,
  getAllTodosUC,
  getTodoUC,
  updateTodoUC,
} = require('@/api/services/todo.service');

const catchAsync = require('@/api/utils/catchAsync');

const createTodo = catchAsync(async (req, res) => {
  const todo = await crateTodoUC(req.body);
  res.status(201).send(todo);
});

const deleteTodo = catchAsync(async (req, res) => {
  const deletedTodo = await deleteTodoUC(req.params);
  if (!deletedTodo) return res.status(404).send({ error: 'Todo not found' });
  res.status(200).json('Todo deleted');
});

const getTodo = catchAsync(async (req, res) => {
  const todo = await getTodoUC(req.params);
  if (!todo) return res.status(404).send({ error: 'Todo not found' });
  res.status(200).send(todo);
});

const getAllTodos = catchAsync(async (req, res) => {
  const todos = await getAllTodosUC(req.body);
  if (!todos) return res.status(404).send({ error: 'Todo is empty' });
  res.status(200).send(todos);
});

const updateTodo = catchAsync(async (req, res) => {
  const updatedTodo = await updateTodoUC(req.body, req.params);
  if (!updatedTodo) return res.status(404).send({ error: 'Todo not found' });
  res.status(200).send(updatedTodo);
});

//export controller functions
module.exports = {
  createTodo,
  deleteTodo,
  getTodo,
  getAllTodos,
  updateTodo,
};
