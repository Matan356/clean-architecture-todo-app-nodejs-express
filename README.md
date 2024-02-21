
# Clean architecture todo app nodejs express

## Project Overview
The Clean Architecture Todo Application is a comprehensive solution designed to showcase best practices in software architecture, focusing on clean architecture principles and RESTful API development. The project provides developers with a clear understanding of how to structure a scalable, maintainable, and testable Todo application.




## Key Features
`Hierarchical Structure:` The project demonstrates a hierarchical organization following clean architecture principles, with clear separation of concerns between layers.

`RESTful API:` The application implements a RESTful API to manage Todo items, supporting CRUD operations (Create, Read, Update, Delete).

`Modular Design:`
Components are organized into separate layers (Entities, Use Cases, Interface Adapters, Frameworks & Drivers), promoting modularity and reusability.

`Testability:` The architecture facilitates unit testing, integration testing, and end-to-end testing, ensuring the reliability and robustness of the application.

`Scalability:` With its modular design, the application can scale efficiently to accommodate future enhancements and requirements.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Matan356/clean-architecture-todo-app-nodejs-express.git 
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DBURI`



## API Reference

#### Get all todos

```http
  GET /api/getAllTodos
```
 No additional parameters required. 


#### Get todo

```http
  GET /api/getTodo/:id
```

| Path Parameter	 | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the todo item to retrieve |

#### Add todo

```http
  POST /api/getTodo/:id
```

| Body Parameter	 | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of the todo item |
| `description`      | `string` | **Required**. Description of the todo item |
| `flag`      | `string` | **Required**. Flag of the todo item |

#### Delete todo

```http
  DELETE /api/removeTodo/:id
```

| Path Parameter	 | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the todo item to delete |

#### Update todo

```http
  PATCH /api/updateTodo/:id
```
| Path Parameter	 | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the todo item to update |

| Body Parameter	 | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` |  Title of the todo item |
| `description`      | `string` |  Description of the todo item |
| `flag`      | `string` |  Flag of the todo item |
| `status`      | `string` |  Status of the todo item |

## Usage/Examples

Once the application is set up, you can:

* Use RESTful API endpoints to manage Todo items (create, read, update, delete).
* Explore the hierarchical structure of clean architecture and understand the esponsibilities of each layer.
* Extend and customize the application to meet your specific requirements.


## Used By

This project is used by the following companies:

- Techtopia
- TiSpace


## Tech Stack
**Server:** Node, Express


## Support
For support or assistance, please open a GitHub issue in the project repository.
Feel free to submit pull requests to enhance the project.

## License

[MIT](https://choosealicense.com/licenses/mit/)

