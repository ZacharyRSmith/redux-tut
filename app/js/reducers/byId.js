const byId = (state = { }, action) => {
  if (!action.response) return state;

  return {
    ...state,
    ...action.response.entities.todos,
  };

  // switch (action.type) {
  //   case 'FETCH_TODOS_SUCCESS':
  //     return action.response.reduce((nextState, todo) => {
  //       nextState[todo.id] = todo;
  //       return nextState;
  //     }, { ...state });
  //   case 'ADD_TODO_SUCCESS':
  //     return {
  //       ...state,
  //       [action.response.id]: action.response,
  //     };
  //   default:
  //     return state;
  // }
};

export default byId;

export const getTodo = (state, id) => state[id];
