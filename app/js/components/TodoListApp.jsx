import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import { addTodo } from '../actions';

// FIXME too many params!
const TodoListApp = ({ dispatch, filter, id, name, todos }) => {

  return (
    <div>
      <h3>{name}</h3>
      <AddTodo
        handleClick={(newTodoText) => {
          dispatch(addTodo(newTodoText, id));
        }}
      />
      <VisibleTodoList
        filter={filter}
        id={id}
        todos={todos}
      />
    </div>
  );
};

export default connect()(TodoListApp);
