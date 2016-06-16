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
    case 'SET_TODOS':
      state = { };

      action.todos.forEach(t => {
        state[t.id] = t;
      });

      return state;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    case 'SET_TODOS':
      return action.todos.map(t => t.id);
    default:
      return state;
  }
};

const todos = combineReducers({ byId, allIds });

export default todos;

const getTodos = (state, filterCb) => {
  return state.allIds.reduce((todos, id) => {
    const t = state.byId[id];

    return ( filterCb(t) ? [...todos, t] : todos );
  }, []);
};

export const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return getTodos(todos, (t) => true);
    case 'completed':
      return getTodos(todos, (t) => t.completed);
    case 'active':
      return getTodos(todos, (t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
