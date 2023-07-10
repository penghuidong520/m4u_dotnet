import React, { useState } from 'react';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addTodoAction,TodoItem } from '../../store/todos'

// used for testing


function TodoPage(): JSX.Element {
	const dispatch = useDispatch();
	const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const today: Date = new Date(); // today.toLocalDateString() = 4/27/2023
	
	// Dates for calendar e.g. left part
	const currentMonth: string = today.toLocaleString('default', { month: 'long' });
	const currentYear: number = today.getFullYear();
	const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
	const dates: Date[] = Array.from({ length: daysInMonth }, (_, i) => new Date(today.getFullYear(), today.getMonth(), i + 1));
	
	// selected date
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	
	// handle Events
	const handleDayClick = (date: Date) => {
		setSelectedDate(date);
	};

	const handleAddTodo = () => {
		console.log('here')
		const newTodoItem: TodoItem = {
			id: Math.floor(Math.random() * 1000),
			title: 'New Todo Item',
			description: 'something new',
		};
		dispatch(addTodoAction(selectedDate.toLocaleDateString(), newTodoItem));
	};
	
	// Dates for todo-list e.g. right part
	const formattedDate: string = selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }); // e.g. '27 April, 2023'
	const selectedDay: string = selectedDate.toLocaleDateString('default', { weekday: 'short' }); // e.g. 'Thu'
	
	// get todoList from store based on date
	const todoList: TodoItem[] = useSelector((state: RootState) => state.todoList[selectedDate.toLocaleDateString()] || []);
	
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
						<div key={date.getDate()} className={`calendar-days ${date.getDate() === selectedDate.getDate() ? 'selected-day' : ''}`} onClick={()=>handleDayClick(date)}>
							<span>{date.getDate()}</span>
						</div>
					))}
				</div>
			</div>
			<div className='todo-right'>
				<div className='todo-list-title-container'>
					<span className='todo-list-title'>{selectedDay}</span>
					<span className='todo-list-title'>{formattedDate}</span>
				</div>
				
				<div className='todo-list-container'>
					<TodoList todos={todoList} />
				</div>

				<div className='todo-list-actions' onClick={handleAddTodo}>
					{/* <span className='add-button'><i className="fa-sharp fa-solid fa-plus"></i></span> */}
					<FontAwesomeIcon className='add-button' icon={faPlus} />
					{/* font awesome may not work pay attention */}
				</div>

			</div>
		</div>
	);
}
			
export default TodoPage;
