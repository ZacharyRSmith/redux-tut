const todoList = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return {
        id: action.id,
        name: action.name
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
    default:
      return state;
  }
};

export default todoLists;
