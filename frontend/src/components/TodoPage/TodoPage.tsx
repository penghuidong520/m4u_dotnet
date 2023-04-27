import React from 'react';
import TodoList from './TodoList';

// used for testing
export type TodoItem = {
    id: number;
    title: string;
    description: string;
  };

function TodoPage(): JSX.Element {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today: Date = new Date();
    const currentMonth: string = today.toLocaleString('default', { month: 'long' });
    const currentYear: number = today.getFullYear();
    const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dates: number[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // used for testing
    const todos: TodoItem[] = [
        { id: 1, title: 'Todo 1', description: 'Description 1' },
        { id: 2, title: 'Todo 2', description: 'Description 2' },
        { id: 3, title: 'Todo 3', description: 'Description 3' },
    ];

    return (
        <div className='todo-calender-container'>
            <div className='todo-left'>
                <h2 className='current-month-year'>
                    <span>
                        {currentMonth}&nbsp;{currentYear}
                    </span>
                </h2>
                <div className='calendar-weekday-container'>
                    {daysOfWeek.map((day: string) => (
                        <div key={day} className='calendar-weekday' >{day}</div>
                    ))}
                </div>
                <div className='calendar-days-container'>
                    {dates.map((date: number) => (
                        <div key={date} className='calendar-days' >
                            <span>{date}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='todo-right'>
                <h2 className='todo-list-title' >Todo List</h2>
                <div className='todo-list-container' >
                    <TodoList todos={todos}/>
                </div>
            </div>
        </div>
    );
}

export default TodoPage;