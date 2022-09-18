import { RequestHandler } from 'express';

import { Todo } from '../models/todo';
// export const createTodo = (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ) => {};

const Todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todo(Math.random().toString(), text);
	Todos.push(newTodo);

	res.status(201).json({
		message: 'Created Todo',
		createdTodo: newTodo,
	});
};

export const getTodos: RequestHandler = (req, res, next) => {
	res.status(200).json({
		message: 'Successful',
		todos: Todos,
	});
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const id = req.params.id;
	const updatedText = (req.body as { text: string }).text;

	const todoIndex = Todos.findIndex((todo) => todo.id === id);

	if (todoIndex < 0) {
		throw new Error('Could not find Todo!');
	}

	Todos[todoIndex] = new Todo(Todos[todoIndex].id, updatedText);

	res.status(200).json({
		message: 'Todo Updated!',
		updatedTodo: Todos[todoIndex],
	});
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
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
