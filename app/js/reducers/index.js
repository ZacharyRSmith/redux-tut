import { combineReducers } from 'redux';

const habit = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

const habits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state,
        habit(undefined, action)
      ];
    default:
      return state;
  }
};

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
          todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const app = combineReducers({
  // todos
  todos,
  visibilityFilter,
  // habits
  habits,
});
export default app;
