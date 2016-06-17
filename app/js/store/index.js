import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import todoApp from '../reducers';

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
