import { HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { app, database } from './constants';
import { CreateTodoDTO } from 'src/todo/dto/create-todo.dto';
import { RegisterDTO } from 'src/auth/dto/auth.dto';

let userToken: string;
let user: RegisterDTO = {
  email: 'test@testing.com',
  password: '1111',
};

beforeAll(async () => {
  await mongoose.connect(database);
  //drop database on every execution
  await mongoose.connection.db.dropDatabase();
  //create user
  await axios.post(`${app}/auth/register`, user);
  //login user and get token
  const {
    data: { token },
  } = await axios.post(`${app}/auth/login`, user);
  userToken = token;  
});

afterAll(async done => {
  await mongoose.disconnect(done);
});

describe('TODO', () => {

  const todo: CreateTodoDTO = {
    title: 'New task',
    completed: false,
    category: 'default'    
  };

  const todo2: CreateTodoDTO = {
    title: 'New task 2',
    completed: false,
    category: 'work'    
  };

  let todoId: string;
  let todoId2: string;

  it('should list all todos: []', () => {
    return request(app)
      .get('/todo')
      .expect([])
      .expect(HttpStatus.OK);
  });

  it('should create a todo', () => {
    return request(app)
      .post('/todo')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${userToken}`)
      .send(todo)
      .expect(({ body }) => {
        expect(body._id).toBeDefined();
        todoId = body._id;
        expect(body.title).toEqual(todo.title);
        expect(body.category).toEqual(todo.category); 
        expect(body.completed).toEqual(todo.completed);        
      })
      .expect(HttpStatus.CREATED);
  });

  it('should read a todo', () => {
    return request(app)
      .get(`/todo/${todoId}`)
      .expect(({ body }) => {
        expect(body.title).toEqual(todo.title);
        expect(body.category).toEqual(todo.category);   
        expect(body.completed).toEqual(todo.completed);   
      })
      .expect(HttpStatus.OK);
  });

  it('should update a todo', () => {
    return request(app)
      .put(`/todo/${todoId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .send({
        title: 'Updated task',
      })
      .expect(({ body }) => {
        expect(body.title).not.toEqual(todo.title);
        expect(body.category).toEqual(todo.category);
        expect(body.completed).toEqual(todo.completed);
      })
      .expect(HttpStatus.OK);
  });

  it('should not delete a todo ok', async () => {
    return request(app)
      .delete(`/todo/${todoId}`)
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('should delete a todo ok', async () => {
    return request(app)
      .delete(`/todo/${todoId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .expect(HttpStatus.OK);
  });

  it('should create a todo 2 with category work', () => {
    return request(app)
      .post('/todo')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${userToken}`)
      .send(todo2)
      .expect(({ body }) => {
        expect(body._id).toBeDefined();
        todoId2 = body._id;
        expect(body.title).toEqual(todo2.title);
        expect(body.category).toEqual(todo2.category); 
        expect(body.completed).toEqual(todo2.completed);        
      })
      .expect(HttpStatus.CREATED);
  }); 

  it('should read an array with 1 todo ', () => {
    return request(app)
      .get(`/todo/category/work`)
      .expect( ({ body }) => {
        expect(body).toHaveLength(1);         
      })
      .expect(HttpStatus.OK);
  });

 
});