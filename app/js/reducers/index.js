import { combineReducers } from 'redux';

import habits from './habits';
import todos from './todos';
import todoLists from './todoLists';

const app = combineReducers({
  // todos
  todoLists,
  todos,
  // habits
  habits,
});
export default app;
