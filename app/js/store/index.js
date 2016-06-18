import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import todoApp from '../reducers';

const thunk = (store) => (next) => (action) =>
  ( typeof action === 'function'
    ? action(store.dispatch)
    : next(action) );

// this allows us to create multiple instances, good for testing.
const configureStore = () => {
  // order of middlewares matters
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export { configureStore };
