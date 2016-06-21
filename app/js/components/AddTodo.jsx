import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

// move listId knowledge to parent component
let AddTodo = ({ dispatch, listId }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value, listId));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
export default connect()(AddTodo);