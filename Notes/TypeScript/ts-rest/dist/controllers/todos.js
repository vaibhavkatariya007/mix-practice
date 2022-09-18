"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// export const createTodo = (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ) => {};
const Todos = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodo);
    res.status(201).json({
        message: 'Created Todo',
        createdTodo: newTodo,
    });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({
        message: 'Successful',
        todos: Todos,
    });
};
exports.updateTodo = (req, res, next) => {
    const id = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = Todos.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find Todo!');
    }
    Todos[todoIndex] = new todo_1.Todo(Todos[todoIndex].id, updatedText);
    res.status(200).json({
        message: 'Todo Updated!',
        updatedTodo: Todos[todoIndex],
    });
};
exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = Todos.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find Todo!');
    }
    Todos.splice(todoIndex, 1);
    res.status(200).json({
        message: 'Todo deleted!',
    });
};
