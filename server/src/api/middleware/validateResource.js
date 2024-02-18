import { AnyZodObject } from 'zod';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e) {
    return res.status(400).send(e.errors);
  }
};

export default validate;
