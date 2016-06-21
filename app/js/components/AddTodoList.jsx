import React from 'react';
import { connect } from 'react-redux';

import { addTodoList } from '../actions';

let AddTodoList = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodoList(input.value));
        input.value = '';
      }}>
        Add Todo List
      </button>
    </div>
  );
};
export default connect()(AddTodoList);
