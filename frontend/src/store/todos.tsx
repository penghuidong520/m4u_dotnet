// Define interfaces for todo items and the todoList state
export interface TodoItem {
	id: number;
	title: string;
	description: string;
	time: string;
}

interface TodoListState {
	[date: string]: TodoItem[];
}

// Define actions and their corresponding action creators
enum TodoListActionTypes {
	ADD_TODO = 'ADD_TODO',
	DELETE_TODO = 'DELETE_TODO',
	EDIT_TODO = 'EDIT_TODO',
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

interface EditTodoAction {
	type: TodoListActionTypes.EDIT_TODO;
	payload: {
		date: string;
		todoId: number;
		updatedTodo: TodoItem;
	};
}

export function addTodoAction(date: string, todoItem: TodoItem): AddTodoAction {
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

function editTodoAction(date: string, todoId: number, updatedTodo: TodoItem): EditTodoAction {
	return {
		type: TodoListActionTypes.EDIT_TODO,
		payload: {
		date,
		todoId,
		updatedTodo,
		},
	};
}

// Define the reducer
type TodoListAction = AddTodoAction | DeleteTodoAction | EditTodoAction;

// preload
const initialState: TodoListState = { };

function todoListReducer(state: TodoListState = initialState, action: TodoListAction): TodoListState {
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
	case TodoListActionTypes.EDIT_TODO: {
	const { date, todoId, updatedTodo } = action.payload;
	const todoItems = state[date].map((item) => {
		if (item.id === todoId) {
			return updatedTodo;
		}
		return item;
	});
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
