// todos.service.js

const { createTodo } = require('@/entities/data-access/todo.da')

const createNewTodo = async (body) => {
    return await createTodo(body)
}
// export service functions
module.exports = {
    createNewTodo,
}