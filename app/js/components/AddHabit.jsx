import React from 'react';
import { connect } from 'react-redux';

import { addHabit } from '../actions';

let AddHabit = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addHabit(input.value));
        input.value = '';
      }}>
        Add Habit
      </button>
    </div>
  );
};
export default connect()(AddHabit);
