import React from 'react';

let AddTodo = ({ handleClick }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        handleClick(input.value);
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
