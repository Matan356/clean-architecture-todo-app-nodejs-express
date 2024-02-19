// todo.route.js

const {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} = require('@/api/controllers/todo.controller');

const {
  validateCreateTodo,
  validateUpdateTodo,
  validateDeleteTodo,
  validateGetTodo,
} = require('@/api/validations/todo.validation');

const validateResource = require('@/api/middleware/validateResource');

const router = require('express').Router();

router.post('/addTodo', validateResource(validateCreateTodo), createTodo);

router.delete('/removeTodo/:id', validateResource(validateDeleteTodo), deleteTodo);

router.patch('/updateTodo/:id', validateResource(validateUpdateTodo), updateTodo);

router.get('/getTodo/:id', validateResource(validateGetTodo), getTodo);

router.get('/getAllTodos', getAllTodos);

module.exports = router;
