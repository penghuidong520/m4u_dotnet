// Define interfaces for todo items and the todoList state
interface TodoItem {
	id: number;
	title: string;
	description: string;
}

interface TodoListState {
	[date: string]: TodoItem[];
}

// Define actions and their corresponding action creators
enum TodoListActionTypes {
	ADD_TODO = 'ADD_TODO',
	DELETE_TODO = 'DELETE_TODO',
}

interface AddTodoAction {
	type: TodoListActionTypes.ADD_TODO;
	payload: {
		date: string;
		todoItem: TodoItem;
	};
}

interface DeleteTodoAction {
	type: TodoListActionTypes.DELETE_TODO;
	payload: {
		date: string;
		todoId: number;
	};
}

function addTodoAction(date: string, todoItem: TodoItem): AddTodoAction {
	return {
		type: TodoListActionTypes.ADD_TODO,
		payload: {
			date,
			todoItem,
		},
	};
}

function deleteTodoAction(date: string, todoId: number): DeleteTodoAction {
	return {
		type: TodoListActionTypes.DELETE_TODO,
		payload: {
			date,
			todoId,
		},
	};
}

// Define the reducer
type TodoListAction = AddTodoAction | DeleteTodoAction;

function todoListReducer(state: TodoListState = {}, action: TodoListAction): TodoListState {
	switch (action.type) {
		case TodoListActionTypes.ADD_TODO: {
			const { date, todoItem } = action.payload;
			const todoItems = state[date] ? [...state[date], todoItem] : [todoItem];
			return {
				...state,
				[date]: todoItems,
			};
		}
		case TodoListActionTypes.DELETE_TODO: {
			const { date, todoId } = action.payload;
			const todoItems = state[date].filter((item) => item.id !== todoId);
			return {
				...state,
				[date]: todoItems,
			};
		}
		default:
		return state;
	}
}

export default todoListReducer;
