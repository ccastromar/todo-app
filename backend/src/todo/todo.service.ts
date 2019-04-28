import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './interfaces/todo.interface';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) { }
    
    // Get all todos
    async getAllTodo(): Promise<Todo[]> {
        return this.todoModel.find().exec();        
    }

    // Get a todo
    async getTodoById(id: string): Promise<Todo> {
        const todo = await this.todoModel.findById(id).exec();
        return todo;
    }

    // Get a todo by category
    async getTodoByCategory(cat: string): Promise<Todo[]> {
        const todo = await this.todoModel.find({"category":cat}).exec();
        return todo;
    }

    // Add a todo
    async addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const newTodo = await this.todoModel(createTodoDTO);
        return newTodo.save();
    }

    // Update a todo
    async updateTodo(id: string, createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const updatedTodo = await this.todoModel
            .findByIdAndUpdate(id, createTodoDTO, { new: true });
        return updatedTodo;
    }

    // Delete a todo
    async deleteTodo(id: string): Promise<any> {
        const deletedTodo = await this.todoModel.findByIdAndRemove(id);
        return deletedTodo;
    }
}
