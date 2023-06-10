import React from 'react';
import { TodoItem } from '../../store/todos';

function TodoList({todos}: { todos: TodoItem[] }): JSX.Element {
    return (
        <ul className='todo-items-container'>
            {todos.map((todo: TodoItem)=> (
                <li key={todo.id} className='todo-item'>
                    <h3 className='todo-title' >{todo.title}</h3>
                    <p className='todo-description'>{todo.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;