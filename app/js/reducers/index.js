import { combineReducers } from 'redux';

import todoLists from './todoLists';

const app = combineReducers({
  todoLists,
});
export default app;
