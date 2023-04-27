import { createStore, combineReducers, applyMiddleware, compose, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({

});

const middleware = applyMiddleware(
  thunk as ThunkMiddleware<any, AnyAction>,
  logger
);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = process.env.NODE_ENV === 'production'
  ? middleware
  : composeEnhancers(middleware);

const configureStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  enhancer
);

export default configureStore;
