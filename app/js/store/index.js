import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import app from '../reducers';

const getMiddlewares = () => {
  let middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return middlewares;
};

const saveStateAtIntervals = (store, interval) => {
  store.subscribe(throttle(() => {
    const { todoLists, todos } = store.getState();

    saveState({
      todoLists,
      todos
    });
  }, interval));
};

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    app,
    persistedState,
    applyMiddleware(...getMiddlewares())
  );

  saveStateAtIntervals(store, 1000);
  return store;
};

export { configureStore };
