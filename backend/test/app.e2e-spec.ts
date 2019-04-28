import * as request from 'supertest';
import { app } from './constants';

describe('Todo', () => {
  it('/GET root', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });   
});