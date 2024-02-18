// todos.controller.js

const { createNewTodo } = require('@/services/')

const createTodo = async (req, res) => {
    const todo = await createNewTodo(req.body)
    res.status(201).send(todo)
}

//export controller functions
module.exports = {
    createTodo
}