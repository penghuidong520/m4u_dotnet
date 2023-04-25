import React from 'react';

function TodoList(): JSX.Element {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today: Date = new Date();
  console.log(today);
  const currentDate: number = today.getDate();
  console.log(currentDate)
  const currentDayOfWeek: string = daysOfWeek[today.getDay()];
  console.log(currentDayOfWeek);
  const dates: number[] = Array.from({ length: 7 }, (_, i) => currentDate + i);

  return (
    <div className='todo-container'>
        <div className='current-date'>currentDayOfWeek</div>
        {dates.map((date: number) => (
            <div key={date}>
                <span>{daysOfWeek[(today.getDay() + dates.indexOf(date)) % 7]}</span>
                <span>{date}</span>
            </div>
        ))}
    </div>
  );
}

export default TodoList;