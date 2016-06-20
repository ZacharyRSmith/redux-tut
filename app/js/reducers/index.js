import { combineReducers } from 'redux';

import habits from './habits';
import todos from './todos';

const app = combineReducers({
  // todos
  todos,
  // habits
  habits,
});
export default app;
