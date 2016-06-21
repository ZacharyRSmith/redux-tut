import { combineReducers } from 'redux';

import habits from './habits';
import todoLists from './todoLists';

const app = combineReducers({
  todoLists,
  habits,
});
export default app;
