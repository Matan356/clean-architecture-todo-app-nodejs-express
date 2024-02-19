// .
// │   README.md
// │   package.json
// │   .env
// │   .eslintrc.js
// │   .eslintignore
// │   .prettierrc
// │   ...
// │
// └─── server
//     │   server.js // start master and forks other workers
//     │
//     ├─── src
//     │   ├─── api
//     │   │   ├─── controllers // 3) Interface Adapters
//     │   │   │   └─── todo.controller.js
//     │   │   │
//     │   │   ├─── services // Considered as part of 2) Use cases
//     │   │   │   └─── todo.service.js
//     │   │   │
//     │   │   ├─── data-access // 1.b) entities (i.e., abstraction of Mongoose models)
//     │   │   │   └─── todo.dao.js
//     │   │   │
//     │   │   ├─── models // 1.a) entities (i.e., Mongoose models)
//     │   │   │   └─── todo.model.js
//     │   │   │
//     │   │   ├─── routes // 4) Routes
//     │   │   │   └─── todo.routes.js
//     │   │   │
//     │   │   ├─── middleware // Could be part of 3) Interface Adapters if it's application-specific
//     │   │   │   └─── ...
//     │   │   │
//     │   │   ├─── validations // Could be part of utils or middleware
//     │   │   │   └─── todo.validation.js
//     │   │   │
//     │   │   └─── utils // Helpers, formatters, validators, etc.
//     │   │       └─── ...
//     │   │
//     │   └─── config // Configurations for the application
//     │       ├─── axios.js
//     │       ├─── default.js
//     │       ├─── express.js
//     │       ├─── logger.js
//     │       ├─── nodeMailer.js
//     │       └─── ...
//     │
//     └─── tests
//         └─── api.js
//         └─── ...
// │
// └─── ...
