// todos.service.js

const {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} = require('@/api/data-access/todo.da');

const crateTodoUC = async (body) => {
  return await createTodo(body);
};
const deleteTodoUC = async (params) => {
  const { id } = params;
  return await deleteTodo(id);
};
const updateTodoUC = async (body, params) => {
  const { id } = params;
  return await updateTodo(id, body);
};
const getAllTodosUC = async (body) => {
  return await getAllTodos(body);
};
const getTodoUC = async (params) => {
  const { id } = params;
  return await getTodo(id);
};
// export service functions
module.exports = {
  crateTodoUC,
  deleteTodoUC,
  getAllTodosUC,
  updateTodoUC,
  getTodoUC,
};
