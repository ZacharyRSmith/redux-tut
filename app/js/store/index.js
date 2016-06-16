import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import todoApp from '../reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) return rawDispatch;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const res = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return res;
  };
};

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  return (action) => ( typeof action.then === 'function'
    ? action.then(rawDispatch)
    : rawDispatch(action)
  );
};

// this allows us to create multiple instances, good for testing.
const configureStore = () => {
  const store = createStore(todoApp);

  // order matters
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.dispatch = addPromiseSupportToDispatch(store);

  return store;
};

export { configureStore };
