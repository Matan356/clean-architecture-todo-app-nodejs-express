// routes/index.js
const router = require('express').Router();
const todos = require("./todo.route");


router.get("/statusCheck", (_, res) => res.status(200).json({ status: "OK" }));

router.use(todos);

module.exports = router;
