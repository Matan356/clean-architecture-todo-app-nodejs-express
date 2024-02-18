// todo.route.js 

const { createTodo } = require('@/controllers/todo.controller')

const router = require('express').Router()

router.post('/addTodo', createTodo)

module.exports = router