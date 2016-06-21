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
}) => {
  return ( todos.length
    ? <ul>
        {todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
              />
        )}
      </ul>
    : <ul></ul>
  );
};

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
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

const mapStateToProps = (
  state,
  ownProps
) => ({
  todos: getVisibleTodos(
    ownProps.todos,
    ownProps.filter
  )
});
const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  onTodoClick: (todoId) => {
    dispatch(toggleTodo(todoId, ownProps.id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);