import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

const Todo = ({
  onClick,
  completed,
  text
  }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
    className={
        completed ?
          'completed' :
          ''
    }
    >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
  }) => (
  <ul>
    {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          />
    )}
  </ul>
);

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(
          t => t.completed
      );
    case 'active':
      return todos.filter(
          t => !t.completed
      );
  }
}

const mapStateToProps = (
  state,
  ownProps
) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  )
});
const mapDispatchToProps = (
  dispatch
) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);