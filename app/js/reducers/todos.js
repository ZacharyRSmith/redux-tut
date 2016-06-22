import { combineReducers } from 'redux';

import todo from './todo';

const byId = (state = { }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  allIds,
  byId,
});

export default todos;

export const getVisibleTodos = (
  state,
  filter
) => {
  const allTodos = state.allIds.map(id => state.byId[id]);

  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(
          t => t.completed
      );
    case 'active':
      return allTodos.filter(
          t => !t.completed
      );
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
