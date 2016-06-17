import { createStore } from 'redux';
import throttle from 'lodash/throttle';

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

const promise = (store) => (next) => {
  return (action) => ( typeof action.then === 'function'
    ? action.then(next)
    : next(action)
  );
};

const wrapDispatch = (store, middlewares) => {
  middlewares.slice().reverse().forEach(m => {
    store.dispatch = m(store)(store.dispatch);
  });
};

// this allows us to create multiple instances, good for testing.
const configureStore = () => {
  const store = createStore(todoApp);
  // order of middlewares matters
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  wrapDispatch(store, middlewares);

  return store;
};

export { configureStore };
