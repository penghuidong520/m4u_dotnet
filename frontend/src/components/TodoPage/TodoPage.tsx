import React, { useState } from 'react';
import TodoList from './TodoList';

// used for testing
export type TodoItem = {
  id: number;
  title: string;
  description: string;
};

function TodoPage(): JSX.Element {
  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today: Date = new Date(); // today.toLocalDateString() = 4/27/2023

  // Dates for todo-list e.g. right part
  const formattedToday: string = today.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }); // e.g. '27 April, 2023'
  const currentDay: string = today.toLocaleDateString('default', { weekday: 'short' }); // e.g. 'Thu'

  // Dates for calendar e.g. left part
  const currentMonth: string = today.toLocaleString('default', { month: 'long' });
  const currentYear: number = today.getFullYear();
  const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const dates: Date[] = Array.from({ length: daysInMonth }, (_, i) => new Date(today.getFullYear(), today.getMonth(), i + 1));

  // selected date
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const handleDayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedDate = e.currentTarget.textContent;
    if (clickedDate !== null) {
      const selectedDay = new Date(today.getFullYear(), today.getMonth(), parseInt(clickedDate));
      setSelectedDate(selectedDay);
    }
  };

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
            <div key={day} className='calendar-weekday'>{day}</div>
          ))}
        </div>
        <div className='calendar-days-container'>
          {dates.map((date: Date) => (
            <div key={date.getDate()} className={`calendar-days ${date.getDate() === selectedDate.getDate() ? 'selected-day' : ''}`} onClick={handleDayClick}>
              <span>{date.getDate()}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='todo-right'>
        <div className='todo-list-title-container'>
          <span className='todo-list-title'>{currentDay}</span>
          <span className='todo-list-title'>{formattedToday}</span>
        </div>

        <div className='todo-list-container'>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
