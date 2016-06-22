import todos, * as fromTodos from './todos';

const todoList = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return {
        id: action.id,
        name: action.name,
        todos: { allIds: [], byId: { } },
      };
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      if (state.id !== action.listId) {
        return state;
      }

      return {
        ...state,
        todos: todos(state.todos, action)
      };
    default:
      return state;
  }
};

const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return [
        ...state,
        todoList(undefined, action)
      ];
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return state.map(l =>
        todoList(l, action)
      );
    default:
      return state;
  }
};

export default todoLists;

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
