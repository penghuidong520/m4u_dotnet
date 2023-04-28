import { createStore, combineReducers, applyMiddleware, compose, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import todoListReducer from './todos';

// Define RootState type
export type RootState = {
  todoList: ReturnType<typeof todoListReducer>
};

// Combine reducers
const rootReducer = combineReducers<RootState>({
  todoList: todoListReducer
});

// Middleware and enhancer setup
const middleware = applyMiddleware(
  thunk as ThunkMiddleware<RootState, AnyAction>,
  logger
);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = process.env.NODE_ENV === 'production'
  ? middleware
  : composeEnhancers(middleware);

// Create the store
const configureStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;