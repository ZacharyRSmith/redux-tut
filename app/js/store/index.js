import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import app from '../reducers';

const configureStore = () => {
  const persistedState = loadState();
  let middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const store = createStore(app, persistedState, applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    saveState({ todos: store.getState().todos });
  }, 1000));

  return store;
};

export { configureStore };
