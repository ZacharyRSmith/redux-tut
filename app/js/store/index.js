import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import app from '../reducers';

const getMiddlewares = () => {
  let middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return middlewares;
};

const configureStore = () => {
  const store = createStore(
    app,
    applyMiddleware(...getMiddlewares())
  );

  return store;
};

export { configureStore };
