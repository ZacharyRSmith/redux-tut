import { combineReducers } from 'redux';

import habits from './habits';
import todos from './todos';

const todoLists = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const app = combineReducers({
  // todos
  todoLists,
  todos,
  // habits
  habits,
});
export default app;
