  <p align="center">
  This is an example of a TODO RESTful API using MongoDB and JWT.
  </p>
  <p>
  For the backend I have implemented a RESTful API using the Nest.js framework that is built on top of Node.js and Express.
  This framework is efficient, scalable and supports Typescript. I think it is better than vanilla JavaScript when there is a lot of people working on the same project or the code base is getting very big.
  It is often more maintainable and self-documenting.
  Obviously for the scope of this exercise, Nest.js wouldn’t be mandatory, and the same could be accomplished using Express.
  </p>
  <p>
  With Nest.js you can create backend code that is testable, scalable, and easily maintainable, like many modern frontend frameworks do.
  You can scaffold the project with Nest CLI creating controllers, modules, services...
  And also, it creates “spec” files for testing with Jest.
  It is like using “Angular 2” philosophy in the backend.
  </p>
  <p>
   I have used a MongoDB database to persist the “Todo” data, running locally but you could use a MongoDB Docker container or a MongoDB Atlas endpoint.
   For the API, a document database or an RDBM database should be ok.
   It should be ok to use another database like CouchDB, or MySQL if using a relational database.
  </p>

## API Description

The API is deployed in root path /api
There are two main “routes”: /api/todo and /api/auth.

### The “todo” API has methods for:
-Get all todos 
-Add a todo 
-Get a todo by Id
-Get a todo by Category
-Update a todo (requires auth token)
-Delete a todo (requires auth token)

### The "auth" API has a method for:
-Sign in a user
-Register a user

I have implemented a JWT token strategy to secure the update and delete of "todos”.

## Frontend

I have implemented a very simple app with Vue, using Vue CLI, to scaffold and build simple components to add, show and delete the "todos".
I am not very experienced in the frontend, but I know the basics of Angular, React and Vue.
I think Vue it’s easier, but any frontend framework could be good for this API.

The app has some basic functionality:
-Login user
-Register user
-List all todos
-Add a todo 
-Delete a todo (need to login first)
-Mark a todo completed (only in UI. TODO: persist in DB)

## Installation

Inside each folder "frontend" and "backend" there is a README with instructions to install.

## Running the app

CORS is enabled by default in order to make requests from the frontend to the backend.
To run the API backend please read a README in folder "backend".
If you like to run the frontend too, please read a README in folder "frontend".

## How to use

First the user has to be created using an email and a password (make a POST request to /api/ath/register passing anb object with "email" and "password".
The password is hashed when stored in database.
Then the user signs in using email and password making a POST request to /api/auth/login.
If it’s ok a JWT token is returned.
This JWT token is needed to make a PUT or DELETE request to /api/todo.
To get all todos by id or category and all users there is no need to pass a JWT token, you can simply make a GET request to /api/todo/:id or /api/todo/:category or /api/users.

## Testing

I have included a minimal e2e testing with supertest for the "todo" route in the backend folder. You can test it also with "Postman" or other tool to make HTTP requests.
