import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo>;
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: any): Promise<Todo>;
    getTodoByCategory(cat: any): Promise<Todo[]>;
    updateTodo(id: any, createTodoDTO: CreateTodoDTO): Promise<Todo>;
    deleteTodo(id: any): Promise<Todo>;
}
