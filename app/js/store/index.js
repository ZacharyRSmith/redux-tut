import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import todoApp from '../reducers';

const logger = (store) => (next) => {
  if (!console.group) return next;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const res = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return res;
  };
};

const promise = (store) => (next) => (action) =>
  ( typeof action.then === 'function'
    ? action.then(next)
    : next(action)
  );

// this allows us to create multiple instances, good for testing.
const configureStore = () => {
  // order of middlewares matters
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export { configureStore };
