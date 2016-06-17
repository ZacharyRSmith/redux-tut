import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({ byId, listByFilter });

export default todos;

export const getVisibleTodos = (state, filter) => {
  // instead of using knowledge of state shape (ie, directly accessing data),
  // use selectors to access data when in separate files
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
