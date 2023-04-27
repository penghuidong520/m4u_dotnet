import React from 'react';
import { TodoItem } from './TodoPage';

function TodoList({todos}: { todos: TodoItem[] }): JSX.Element {
    return (
        <ul>
            {todos.map((todo: TodoItem)=> (
                <li key={todo.id}>
                    <span className='todo-title'>{todo.title}</span>
                    <p className='todo-description'>{todo.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;