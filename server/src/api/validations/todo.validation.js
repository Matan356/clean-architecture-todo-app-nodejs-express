const Joi = require('joi');

// Define the validation schema for Todo
const todoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(''),
  completed: Joi.boolean().default(false),
});

module.exports = todoSchema;
