const byId = (state = { }, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.reduce((nextState, t) => {
        nextState[t.id] = t;
        return nextState;
      }, { ...state });
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
