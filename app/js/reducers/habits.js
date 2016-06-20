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

export default habits;
