import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import todoApp from '../reducers';

// this allows us to create multiple instances, good for testing.
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);

  store.subscribe(throttle(() => {
    saveState({ todos: store.getState().todos })
  }, 1000));

  return store;
};

export { configureStore };
