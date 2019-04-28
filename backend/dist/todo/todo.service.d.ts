import { Model } from 'mongoose';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDTO } from './dto/create-todo.dto';
export declare class TodoService {
    private readonly todoModel;
    constructor(todoModel: Model<Todo>);
    getAllTodo(): Promise<Todo[]>;
    getTodoById(id: string): Promise<Todo>;
    getTodoByCategory(cat: string): Promise<Todo[]>;
    addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo>;
    updateTodo(id: string, createTodoDTO: CreateTodoDTO): Promise<Todo>;
    deleteTodo(id: string): Promise<any>;
}
