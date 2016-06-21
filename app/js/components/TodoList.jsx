import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/todoLists';

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
              onClick={() => onTodoClick(todo.id, todo.listId)}
              />
        )}
      </ul>
    : <ul></ul>
  );
};

const mapStateToProps = (
  state,
  ownProps
) => ({
  todos: getVisibleTodos(
    ownProps,
    ownProps.filter
  )
});
export default connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList);