import React from 'react';

function TodoList(): JSX.Element {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today: Date = new Date();
  const currentDate: number = today.getDate();
  const currentDayOfWeek: string = daysOfWeek[today.getDay()];
  const dates: number[] = Array.from({ length: 7 }, (_, i) => currentDate + i);

  return (
    <div>
      <h2>{currentDayOfWeek}</h2>
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