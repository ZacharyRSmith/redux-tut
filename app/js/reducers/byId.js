const byId = (state = { }, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.response.reduce((nextState, todo) => {
        nextState[todo.id] = todo;
        return nextState;
      }, { ...state });
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
