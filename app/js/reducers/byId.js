const byId = (state = { }, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
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
